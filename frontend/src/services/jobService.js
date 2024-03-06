import axios from 'axios';

const baseURL = 'http://localhost:3000/api/';

export default {
  async fetchJobs(username) {
    return axios.get(`${baseURL}jobs?username=${username}`);
  },
};
