#!/bin/env bash
#
#SBATCH -p Brody                # partition (queue)
#SBATCH -c 12                      # number of cores
#SBATCH -t 600                  # time (minutes)
#SBATCH -o logs/clearmap2_%j.out        # STDOUT #add _%a to see each array job
#SBATCH -e logs/clearmap2_%j.err        # STDERR #add _%a to see each array job

module load anacondapy/5.3.1
. activate cm2

# CHANGE THIS!! 
#set folder where you have a renamed folder filled with Z planes in 0000-end order

#convert z planes to stitched npy
OUT0=$(sbatch --array=0 --export=FOLDER_TO_USE=$1 slurm_files/cm2_step0.sh)
echo $OUT0

# find cells in blocks                        
OUT1=$(sbatch --dependency=afterany:${OUT0##* } --array=0-500 --export=FOLDER_TO_USE=$1 slurm_files/cm2_step1.sh)
echo $OUT1

# combine blocks                                  
OUT3=$(sbatch --dependency=afterany:${OUT1##* } --array=0 --export=FOLDER_TO_USE=$1 slurm_files/cm2_step3.sh)
echo $OUT3


# example run:
# use rename_for_clearmap.py on head node
# change folder name
# from rat_BrainPipe/ClearMap2/ClearMap/Scripts
# sbatch cell_detect.sh
