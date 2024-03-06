<template>
    <form @submit.prevent="login" v-if="!isLoggedIn">
      <input type="text" v-model="username" placeholder="Enter your username" required />
      <button type="submit">Login</button>
    </form>
    <button v-else @click="logout">Logout</button>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    props: {
      isLoggedIn: {
        type: Boolean,
        required: true,
      },
      login: {
        type: Function,
        required: true,
      },
      logout: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        username: '',
      };
    },
    methods: {
      login() {
        if (this.username) {
          this.$emit('login', this.username);
        }
      },
      logout() {
        this.$emit('logout');
      },
    },
  };
  </script>
  