# *Descriptions of files*:
* `sub_clearmap_cluster.sh`:
	* .sh file to be used to submit to a slurm scheduler
	* this can change depending on scheduler+cluster but generally batch structure requires 2 variables to pass to `run_clearmap_cluster.py`:
		* stepid = controlling which 'step' to run
		* jobid = controlling which the jobid (iteration) of each step
	* Steps:
		* 0: set up dictionary and save; requires a single job (jobid=0)
		* 1: process (stitch, resize, etc) zplns (using tpisano lightsheet package), ensure that 1000 > zplns/slurmfactor. Typically submit 250 jobs (jobid=0-1000)
		* 2: resample and combine; typically submit 3 jobs (requires 1 job/channel; jobid=0-3)
		* 3: elastix (utilizing Kirst's ClearMap; requires 1 job/channel; jobid=0-2)
		* 4: cell detection (utilizing Kirst's ClearMap; requires ~200 jobs depending on settings; jobid=0-200)
		* 5: consolidates detected cells since each step4 job doesn't communicate with each other (requires 1 job; jobid=0)
		* 6: output analysis (utilizing Kirst's ClearMap; requires 1 job; jobid=0)

* `run_clearmap_cluster.py`:
	* .py file to be used to manage the parallelization to a SLURM cluster of Kirst's ClearMap
	* inputdictionary and params need to be changed for each brain
	* the function `ClearMap.cluster.directorydeterminer.directorydeterminer` *REQUIRES MODIFICATION* for both your local machine and cluster. This function handles different paths to the same file server.
	* generally the process is using a local machine, run step 0 (be sure that files are saved *BEFORE (running this step) to generate a folder where data will be stored
	* then using the cluster's headnode (in the new folder's clearmap directory generated from the previous step) submit the batch job: `sbatch sub_clearmap_cluster.sh`

* *ClearMap.cluster:*
  * `imageprocessing`: most functions taken from tpisano's BrainPipe package
  * `par_tools`: functions made to allow for division of labor of Kirst's ClearMap package
  * `directorydeterminer` function to allow for different machines to use the same package
  * `utils`: misc functions taken from tpisano's BrainPipe package

### Edit: ClearMapCluster/ClearMap/cluster/directorydeterminer:
* Add your paths for BOTH the cluster and local machinery

## To run, please follow below:
* Open `run_clearmap_cluster.py`
* For each brain modify:
	* inputdictionary
	* params
* Then generally the process is using a local machine, run step 0 (be sure that files are saved BEFORE( running this step) this generates a folder where data will be generated:

## Tutorials and example analysis:
* For a step-by-step tutorial on testing clearmap cell detection, use `parameter_sweep.ipynb`
* For an example notebook on how to analyze c-Fos behavioral cohorts using the output from this package, use `ClearMapCluster/ClearMap/Analysis/cell_detection_analysis_cfos.ipynb`
