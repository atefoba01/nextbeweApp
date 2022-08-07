const router = require('express').Router();
const {getAllJobs,
  createJobs,getSingleJob} = require('../controllers/jobs')


router.get('/jobpostings',getAllJobs)
router.get('/singlejob',getSingleJob)
router.post('/createjob', createJobs)

module.exports = router;