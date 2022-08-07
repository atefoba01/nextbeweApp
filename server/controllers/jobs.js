const CreateJob = require('../collections/createJob')
const getAllJobs = async(req,res) => {
  try{
    const getJobs = await CreateJob.find()
    res.status(200).json({msg:"Fetched all jobs are", data: getJobs})
  }catch(err){
    console.log(err)
  }
}

const createJobs = async(req,res) =>{
  try {
    const {jobRole,jobDescription,jobResponsibilitys,skills,weAreLookingFor,additionalDetails} = req.body;
    const jobs = new CreateJob({
      jobRole,
      jobDescription,
      jobResponsibilitys,
      skills,
      weAreLookingFor,
      additionalDetails
    })
    await jobs.save()
    res.status(200).json({msg:"Job Created Successfully"})
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllJobs,
  createJobs
}