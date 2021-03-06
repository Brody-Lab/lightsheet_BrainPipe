
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Dec 12 15:13:28 2019

@author: wanglab
"""

import os
import tifffile as tif
import sys
from scipy.ndimage import zoom
sys.path.append("/home/emilyjanedennis/Desktop/GitHub/rat_BrainPipe/")
from tools.registration.register import elastix_command_line_call
src = "/home/emilyjanedennis/Desktop/for_registration_to_lightsheet"

param_fld = "/home/emilyjanedennis/Desktop/GitHub/rat_BrainPipe/parameterfolder"

# waxholm = "WHS_SD_rat_T2star_v1.01_atlas"
# PRA = "PRA_10um and PRA_25um"

mvtiffs = ["a235_Rshrunk","a235"]
fxtiff = "mPRA"

fx = os.path.join(src,"tiffs/{}.tif".format(fxtiff))


for mvtiff in mvtiffs:
	mv = os.path.join(src,"tiffs/{}.tif".format(mvtiff))
	outputfilename = os.path.join(src,"enlarged_tiffs/{}_for_{}.tif".format(mvtiff,fxtiff))
	print(outputfilename)
	outputdirectory = os.path.join(src,"output_dirs/{}_to_{}".format(mvtiff,fxtiff))

	# need to make moving larger (~140% seems to work well?) to transform to fixed
	moving = tif.imread(mv)
	fixed = tif.imread(fx)
	zf, yf, xf = (fixed.shape[0]/moving.shape[0])*1.4, (
		    fixed.shape[1] /
    		moving.shape[1])*1.4, (fixed.shape[2]/moving.shape[2])*1.4
	print("\nzooming...")
	moving_for_fixed = zoom(moving, (zf, yf, xf), order=0,mode='nearest')

	# saved out volume
	print("\nsaving zoomed volume...")
	tif.imsave(outputfilename,moving_for_fixed.astype("uint16"))


	if not os.path.exists(outputdirectory):
    		os.mkdir(outputdirectory)

	params = [os.path.join(param_fld, xx) for xx in os.listdir(param_fld)]
	print("{} are params".format(params))
	params.sort()
	print("{} sorted params".format(params))
	e_out, transformfiles = elastix_command_line_call(fx, outputfilename, outputdirectory, params)

