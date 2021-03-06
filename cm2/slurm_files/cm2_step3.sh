#!/bin/env bash
#
#SBATCH -p Brody                # partition (queue)
#SBATCH -c 12                      # number of cores
#SBATCH -t 300                  # time (minutes)
#SBATCH -o logs/clearmap2_%j_%a.out        # STDOUT #add _%a to see each array job
#SBATCH -e logs/clearmap2_%j_%a.err        # STDERR #add _%a to see each array job
#SBATCH --contiguous #used to try and get cpu mem to be contigous
#SBATCH --mem 120000 #120 gbs

PYTHONPATH="${PYTHONPATH}:/scratch/ejdennis/rat_BrainPipe/ClearMap2"

module load anacondapy/2020.11
. activate cm2

echo "echo input 1 then 2"
echo "$1"
echo "$2"

#combine blocks
xvfb-run python cell_detect.py 3 $1 $2
