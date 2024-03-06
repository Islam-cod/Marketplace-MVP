const businessesData = require('./sample_data/businesses.json');
const classificationsData = require('./sample_data/classifications.json');
const jobsData = require('./sample_data/jobs.json');
const locationsData = require('./sample_data/locations.json');

module.exports = {
  businesses: businessesData.businesses,
  classifications: classificationsData.classifications,
  jobs: jobsData.jobs,
  locations: locationsData.locations,
};
