<template>
    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ErrorComponent',
    props: {
      errorMessage: String
    }
  };
  </script>
  
  <style scoped>
  .error-message {
    color: red;
    /* Additional styling */
    margin-top: 2em;
    padding: 1em;
    border: 1px solid red;
    border-radius: 4px;
    
  }
  </style>