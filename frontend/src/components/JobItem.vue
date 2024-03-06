<template>
  <article class="job-item">
    <h2>{{ job.headline }}</h2>
    <p>{{ job.description }}</p>
    <dl>
      <dt>Classification:</dt>
      <dd>{{ job.classification }}</dd>

      <dt>Location:</dt>
      <dd>{{ job.location }}</dd>

      <dt>Date Posted:</dt>
      <dd>{{ formattedDate }}</dd>
    </dl>
  </article>
</template>

<script>
export default {
  name: 'JobItem',
  props: {
    job: {
      type: Object,
      required: true,
      validator: function (value) {
        return (
          'headline' in value &&
          'description' in value &&
          'classification' in value &&
          'location' in value &&
          'date_added' in value
        );
      },
    },
  },
  computed: {
    formattedDate() {
      const date = new Date(this.job.date_added);
      if (isNaN(date)) {
        return 'Invalid date';
      }
      return date.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
    },
  },
};
</script>

<style scoped>
.job-item {
  margin-bottom: 1em;
  margin-top: 1em;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
}

dt {
  font-weight: bold;
}

dd {
  margin-left: 0;
  margin-bottom: 0.5em;
}
</style>
