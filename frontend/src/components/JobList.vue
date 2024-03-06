<template>
  <div>
    <LoginForm :isLoggedIn="isLoggedIn" @login="login" @logout="logout" />
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="jobs.length > 0">
      <JobItem v-for="job in jobs" :key="job.id" :job="job" />
    </div>
    <div v-else-if="dataFetched && !jobs.length">
      <p>No jobs found for this user.</p>
    </div>
    <ErrorComponent v-if="error" :errorMessage="error" />
  </div>
</template>

<script>
import JobItem from './JobItem.vue';
import ErrorComponent from './ErrorComponent.vue';
import LoginForm from './LoginForm.vue';
import jobService from '../services/jobService';

export default {
  name: 'JobList',
  components: {
    JobItem,
    ErrorComponent,
    LoginForm,
  },
  data() {
    return {
      jobs: [],
      error: '',
      dataFetched: false,
      isLoggedIn: false,
      loading: false,
    };
  },
  methods: {
    async login(username) {
      this.loading = true;
      this.error = '';
      this.dataFetched = false;

      try {
        const response = await jobService.fetchJobs(username);
        this.jobs = response.data;
        this.isLoggedIn = true;
        this.dataFetched = true;
      } catch (error) {
        this.error = 'An error occurred while fetching jobs. Please try again later.';
        console.error('Error fetching jobs:', error.message);
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.jobs = [];
      this.isLoggedIn = false;
      this.dataFetched = false;
    },
  },
};
</script>
