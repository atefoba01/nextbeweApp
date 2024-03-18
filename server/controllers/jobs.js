const CreateJob = require('../collections/createJob')

const getAllJobs = async(req,res) => {
  try{
    const getJobs = await CreateJob.find()
    res.status(200).json({msg:"Fetched all jobs are", data: getJobs})
  }catch(err){
    console.log(err)
  }
}

const getSingleJob = async(req,res) => {
  try{
    const {postId} = req.query;
    const getSinglePost = await CreateJob.findOne({_id: postId})
    if(!getSinglePost){
      res.status(400).json({msg:"Unable to find the post with this is"})
    }else{
      res.status(200).json({msg:"Post is available", data: getSinglePost})
    }
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
  createJobs,
  getSingleJob
}
