const { businesses, classifications, jobs, locations } = require('../data/sampleData');

exports.getJobsForUser = (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  const userBusinesses = businesses.filter(b => b.username === username);
  const userClassifications = userBusinesses.flatMap(b => b.classifications);
  const userLocations = userBusinesses.flatMap(b => b.locations_served);

  const relevantJobs = jobs.filter(job => 
    userClassifications.includes(job.classification) && userLocations.includes(job.location)
  );

  const mappedJobs = relevantJobs.map(job => ({
    ...job,
    classification: classifications.find(c => c.id === job.classification)?.name,
    location: locations.find(l => l.id === job.location)?.name
  }));

  return res.json(mappedJobs);
};
