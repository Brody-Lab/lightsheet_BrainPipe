#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Mon Oct 22 16:32:31 2018

@author: tpisano
"""


import numpy as np, os, sys, multiprocessing as mp, shutil
from skimage.external import tifffile
from skimage.util import view_as_windows, regular_grid


if __name__ == '__main__':
    patchsize = (100,1000,1000) #ZYX
    dtype = 'float32'
    batchsize = 2
    stridesize = (90,900,900) #ZYX
    cores = 12
    verbose=True 
    cleanup = False #if True, files will be deleted when they aren't needed. Keep false while testing
    mode = 'folder' #'folder' = list of files where each patch is a file, 'memmap' = 4D array of patches by Z by Y by X
    src = '/jukebox/wang/pisano/tracing_output/antero_4x/20180409_jg43_bl6_lob6a_01/full_sizedatafld/20180409_bl6_h129_jg43_4x_647_008na_1hfds_z7d5um_150msec_10povlp_ch00'
    dst = '/home/wanglab/Downloads/'
   
    #convert folder into memmap array
    in_dst = os.path.join(dst, 'input_memmap_array.npy') 
    input_arr = make_memmap_from_tiff_list(src, in_dst, cores, dtype=dtype)
    
    #make patches
    inputshape = get_dims_from_folder(src)
    patchlist = make_indices(inputshape, stridesize)
    
    #generate memmap array of patches
    patch_dst = os.path.join(dst, 'patched_memmap_array.npy')
    patch_memmap_array = generate_patch_memmap_array(input_arr, patch_dst, patchlist, stridesize, patchsize, mode = mode, verbose = verbose)
    if cleanup: shutil.rmtree(input_arr)
    #run CNN on each patch, outputing into another memmaped array of same dims as patch_memmap_array
    
    
    #now reconstruct...
    if cleanup: shutil.rmtree(patch_memmap_array)
    cnn_src = patch_memmap_array#TMP
    recon_dst = os.path.join(dst, 'reconstructed_array.npy')
    reconstruct_memmap_array_from_patch_memmap_array(cnn_src, recon_dst, inputshape, patchlist, patchsize, stridesize, verbose = verbose)
    if cleanup: shutil.rmtree(cnn_src)
    
#%%
def reconstruct_memmap_array_from_patch_memmap_array(cnn_src, recon_dst, inputshape, patchlist, patchsize, stridesize, verbose=True):
    '''Function to take CNN probablity map memory mapped array of shape (patches, patchsize_z, patchsize_y, patchsize_x) and built into single 3d volume
    
    Inputs
    ---------------
    src = cnn_memory_mapped array of shape (patches, patchsize_z, patchsize_y, patchsize_x)
    recon_dst = path to generate numpy array
    inputshape = (Z,Y,X) shape of original input array
    patchlist = list of patches generated from make_indices function
    patchsize = (10,1000,1000) - size of window ZYX
    stridesize = (90,900,900) - stride size in 3d ZYX
    
    Returns
    ------------
    location of memory mapped array of inputshape
    '''
    
    #load
    cnn_array = load_np(cnn_src)
    
    #init new array
    recon_array = load_memmap_arr(recon_dst, mode='w+', shape = inputshape, dtype = 'float32')
    
    #patchsize
    zps, yps, xps = patchsize
    
    #patch to stride delta
    zss, yss, xss = stridesize
    zds, yds, xds = [p-s for p,s in zip(patchsize, stridesize)]
    
    #iterate(90,90,30)
    for i,p in enumerate(patchlist):    
        a = recon_array[p[0]:p[0]+zps, p[1]:p[1]+yps, p[2]:p[2]+xps]
        b =  cnn_array[i]
        if not a.shape == b.shape: b = b[:a.shape[0], :a.shape[1], :a.shape[2]]
        nvol = np.maximum(a,b)
        recon_array[p[0]:p[0]+zps, p[1]:p[1]+yps, p[2]:p[2]+xps] = nvol
        recon_array.flush()
        if verbose and i%100 ==0: print('{} of {}'.format(i, len(patchlist)))
    
    #this is slower
    if False:
        #make comparision array locs (essentially a border to compare while keeping the middle of the new patch)
        compare_loc_array = np.ones(patchsize).astype('bool')
        compare_loc_array[zds:-zds, yds:-yds, xds:-xds] = False
        #plt.imshow(compare_loc_array[50])
        
        #iterate incorporating delta
        for i,p in enumerate(patchlist):    
            
            #current patch
            a = recon_array[p[0]:p[0]+zps, p[1]:p[1]+yps, p[2]:p[2]+xps]
            #patch to add
            b =  cnn_array[i]
            if not a.shape == b.shape: b = b[:a.shape[0], :a.shape[1], :a.shape[2]]
            #look at delta around border
            nvol = np.maximum(a,b, where=compare_loc_array)
            recon_array[p[0]:p[0]+zps, p[1]:p[1]+yps, p[2]:p[2]+xps] = nvol
            recon_array.flush()
            if verbose and i%100 ==0: print('{} of {}'.format(i, len(patchlist)))

    return recon_dst


def generate_patch_memmap_array(input_arr, patch_dst, patchlist, stridesize, patchsize, mode = 'folder', verbose = True):
    '''Function to patch up data and make into memory mapped array
    
    Inputs
    -----------
    src = folder containing tiffs
    patch_dst = location to save memmap array
    patchlist = list of patches generated from make_indices function
    stridesize = (10,1000,1000) - stride size in 3d ZYX
    patchsize = (180,180,60) - size of window ZYX
    mode = 'folder' #'folder' = list of files where each patch is a file, 'memmap' = 4D array of patches by Z by Y by X

    Returns
    ------------
    location of patched memory mapped array of shape (patches, patchsize_z, patchsize_y, patchsize_x)

    '''
    #load array
    input_arr = load_np(input_arr)
        
    if mode == 'memmap':
        print('Mode == memmap')
        #init patch array:
        inputshape = (len(patchlist), patchsize[0], patchsize[1], patchsize[2])
        patch_array = load_memmap_arr(patch_dst, mode='w+', shape = inputshape, dtype = 'float32')
            
        #patch
        for i,p in enumerate(patchlist):
            v = input_arr[p[0]:p[0]+patchsize[0], p[1]:p[1]+patchsize[1], p[2]:p[2]+patchsize[2]]
            patch_array[i, :v.shape[0], :v.shape[1], :v.shape[2]] = v
            if i%100==0: 
                patch_array.flush()
                if verbose: print('{} of {}'.format(i, len(patchlist)))
        patch_array.flush()
    if mode == 'folder':
        print('Mode == folder')
        if patch_dst[-4:]=='.npy': patch_dst = patch_dst[:-4]
        if not os.path.exists(patch_dst): os.mkdir(patch_dst)
        #patch
        for i,p in enumerate(patchlist):
            v = input_arr[p[0]:p[0]+patchsize[0], p[1]:p[1]+patchsize[1], p[2]:p[2]+patchsize[2]]
            tifffile.imsave(os.path.join(patch_dst, 'patch_{}.tif'.format(str(i).zfill(10))), v.astype('float32'), compress=1)
            if i%100==0 and verbose: print('{} of {}'.format(i, len(patchlist)))
    #return
    return patch_dst
   
    
def get_dims_from_folder(src):    
    '''Function to get dims from folder (src)
    '''
    fls = listdirfull(src, keyword = '.tif')
    y,x = tifffile.imread(fls[0]).shape
    return (len(fls),y,x)
    
def make_indices(inputshape, stridesize):
    '''Function to collect indices
    inputshape = (500,500,500)
    stridesize = (90,90,30)
    '''    
    zi, yi, xi = inputshape
    zs, ys, xs = stridesize
    
    lst = []
    z = 0; y = 0; x = 0
    while z<zi:
        while y<yi:
            while x<xi:
                lst.append((z,y,x))
                x+=xs
            x=0
            y+=ys
        x=0
        y=0
        z+=zs
    return lst

def make_memmap_from_tiff_list(src, dst, cores=1, dtype=False, verbose=True):
    '''Function to make a memory mapped array from a list of tiffs
    '''
    
    #setup
    if type(src) == str and os.path.isdir(src): 
        src = listdirfull(src, keyword = '.tif')
        src.sort()
    im = tifffile.imread(src[0])
    if not dtype: dtype = im.dtype
    
    #init
    memmap=load_memmap_arr(dst, mode='w+', dtype=dtype, shape=tuple([len(src)]+list(im.shape)))
    
    #run
    if cores<=1:
        for i,s in enumerate(src):
            memmap[i,...] = tifffile.imread(s)
            memmap.flush()
    else:
        iterlst = [(i,s, dst, verbose) for i,s in enumerate(src)]    
        p = mp.Pool(cores)
        p.map(make_memmap_from_tiff_list_helper, iterlst)
        p.terminate

    return dst

def make_memmap_from_tiff_list_helper((i, s, memmap_pth, verbose)):
    '''
    '''
    #load
    arr=load_np(memmap_pth, mode='r+')
    arr[i,...] = tifffile.imread(s)
    arr.flush(); del arr
    if verbose: sys.stdout.write('\ncompleted plane {}'.format(i)); sys.stdout.flush()
    return

def listdirfull(x, keyword=False):
    '''might need to modify based on server...i.e. if automatically saving a file called 'thumbs'
    '''
    if not keyword:
        return [os.path.join(x, xx) for xx in os.listdir(x) if xx[0] != '.' and '~' not in xx and 'Thumbs.db' not in xx]
    else:
        return [os.path.join(x, xx) for xx in os.listdir(x) if xx[0] != '.' and '~' not in xx and 'Thumbs.db' not in xx and keyword in xx]
def load_memmap_arr(pth, mode='r', dtype = 'uint16', shape = False):
    '''Function to load memmaped array.

    Inputs
    -----------
    pth: path to array
    mode: (defaults to r)
    +------+-------------------------------------------------------------+
    | 'r'  | Open existing file for reading only.                        |
    +------+-------------------------------------------------------------+
    | 'r+' | Open existing file for reading and writing.                 |
    +------+-------------------------------------------------------------+
    | 'w+' | Create or overwrite existing file for reading and writing.  |
    +------+-------------------------------------------------------------+
    | 'c'  | Copy-on-write: assignments affect data in memory, but       |
    |      | changes are not saved to disk.  The file on disk is         |
    |      | read-only.                                                  |
    dtype: digit type
    shape: (tuple) shape when initializing the memory map array

    Returns
    -----------
    arr
    '''
    if shape:
        assert mode =='w+', 'Do not pass a shape input into this function unless initializing a new array'
        arr = np.lib.format.open_memmap(pth, dtype = dtype, mode = mode, shape = shape)
    else:
        arr = np.lib.format.open_memmap(pth, dtype = dtype, mode = mode)
    return arr

def load_np(src, mode='r'):
    '''Function to handle .npy and .npyz files. Assumes only one k,v pair in npz file
    '''
    if str(type(src)) == "<type 'numpy.ndarray'>" or str(type(src)) == "<class 'numpy.core.memmap.memmap'>":
        return src
    elif src[-4:]=='.npz':
        fl = np.load(src)
        #unpack ASSUMES ONLY SINGLE FILE
        arr = [fl[xx] for xx in fl.keys()][0]
        return arr
    elif src[-4:]=='.npy':
        try:
            arr=load_memmap_arr(src, mode)
        except:
            arr = np.load(src)
        return arr