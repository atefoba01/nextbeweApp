const getAllJobs = async(req,res) => {
  try{
    console.log('get jobs')
  }catch(err){
    console.log(err)
  }
}

const createJobs = async(req,res) =>{
  try {
    console.log('create jobs')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllJobs,
  createJobs
}