<template>
  <div id="app">
    <h1>Job Listings</h1>
    <JobList />
  </div>
</template>

<script>
import JobList from './components/JobList.vue';

export default {
  name: 'App',
  components: {
    JobList
  }
};
</script>

