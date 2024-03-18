const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let createJob = new Schema({
  jobRole: {
    type: String,
    required: true
  },
  jobDescription:{
    type: String,
    required: true
  },
  jobResponsibilitys:{
    type: String,
  },
  skills:{
    type: String,
  },
  weAreLookingFor:{
    type: String
  },
  additionalDetails:{
    type: String
  }
  
},{timestamps:true});



module.exports = mongoose.model("createjobs", createJob);
