<template>
    <div>
      <h1>Login</h1>
      <input type="text" v-model="username" placeholder="Enter your username" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        username: ''
      };
    },
    methods: {
      login() {
        this.$router.push({ name: 'JobList', params: { username: this.username } });
      }
    }
  };
  </script>
  