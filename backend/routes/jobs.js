const express = require('express');
const { getJobsForUser } = require('../controllers/jobsController');

const router = express.Router();

router.get('/jobs', getJobsForUser);

module.exports = router;
