#!/usr/bin/env python3

# -*- coding: utf-8 -*-

"""

Created on Mon Jul 27 17:37:30 2020



@author: wanglab

"""


import os
import sys
import time

sys.path.append("/home/emilyjanedennis/Desktop/GitHub/rat_BrainPipe")
import tifffile as tif
from tools.utils.io import makedir
from tools.registration.register import change_interpolation_order
from tools.registration.register import transformix_plus_command_line_call
from tools.registration.transform_list_of_points import modify_transform_files
from scipy.ndimage.interpolation import zoom


# setting paths
src = "/home/emilyjanedennis/Desktop/for_registration_to_lightsheet/"
# ann = "/home/emilyjanedennis/Desktop/for_registration_to_lightsheet/10grid.tif"
fx = os.path.join(src, "tiffs/PRA_25um.tif")
mvtiffs = ["a235","c223","c514","c515","e106","f119","h170","k303","k304","k327","k333"]

################################################### 

# setting paths
for mvtiff in mvtiffs:
    mv = os.path.join(src, "volumes_25/{}.tif".format(mvtiff))
    enlargedfilename= os.path.join(src, "enlarged_tiffs/{}.tif".format(mvtiff))

    dst = os.path.join(src,"output_dirs/{}_in_PRA".format(mvtiff))
    makedir(dst)
    transformfilepath = os.path.join(src, "out_25/{}".format(mvtiff))
    moving = tif.imread(mv)
    fixed = tif.imread(fx)

    zf, yf, xf = (fixed.shape[0]/moving.shape[0])*1.4, (
        fixed.shape[1] /
        moving.shape[1])*1.4, (fixed.shape[2]/moving.shape[2])*1.4
    print("\nzooming...")
    moving_for_fixed = zoom(moving,(zf,yf,xf),order=0)

    print("\nsaving zoomed volume...")
    tif.imsave(enlargedfilename,moving_for_fixed.astype("uint16"))

    # copy the parameter files
    a2r = [os.path.join(transformfilepath, xx) for xx in os.listdir(transformfilepath) if "Transform" in xx]

    a2r.sort()

    transformfiles = modify_transform_files(transformfiles=a2r, dst=dst)
    [change_interpolation_order(xx, 0) for xx in transformfiles]

    # change the parameter in the transform files that outputs 16bit images i>
    for fl in transformfiles:  # Read in the file
        with open(fl, "r") as file:
            filedata = file.read()
        # Replace the target string
        filedata = filedata.replace(
            '(ResultImagePixelType "float")', '(ResultImagePixelType "short")')
        # Write the file out again
        with open(fl, "w") as file:
            file.write(filedata)

    # run transformix
    transformix_plus_command_line_call(enlargedfilename, dst, transformfiles[-1])

    ############ affine ###############

    dst = os.path.join(src,"output_dirs/{}_in_PRA_affine".format(mvtiff))
    # copy the parameter files
    makedir(dst)
    a2r = [os.path.join(transformfilepath, xx) for xx in os.listdir(transformfilepath) if "TransformParameters.0" in xx]

    transformfiles = modify_transform_files(transformfiles=a2r, dst=dst)
    [change_interpolation_order(xx, 0) for xx in transformfiles]

    # change the parameter in the transform files that outputs 16bit images i>
    for fl in transformfiles:  # Read in the file
        with open(fl, "r") as file:
            filedata = file.read()
        # Replace the target string
        filedata = filedata.replace(
            '(ResultImagePixelType "float")', '(ResultImagePixelType "short")')
        # Write the file out again
        with open(fl, "w") as file:
            file.write(filedata)

    # run transformix
    transformix_plus_command_line_call(enlargedfilename, dst, transformfiles[-1])



