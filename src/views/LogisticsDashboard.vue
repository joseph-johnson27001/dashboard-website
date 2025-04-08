<template>
  <div class="dashboard-wrapper">
    <iframe
      src="https://joseph-johnson-hr-dashboard.netlify.app/"
      class="dashboard-iframe"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "LogisticsDashboard",
};
</script>

<style scoped>
.dashboard-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.dashboard-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
