const router = require('express').Router();
const {getAllJobs,
  createJobs} = require('../controllers/jobs')


router.get('/jobpostings',getAllJobs)
router.post('/createjob', createJobs)

module.exports = router;