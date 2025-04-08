<template>
  <div class="dashboard-viewer">
    <iframe :src="iframeUrl" class="dashboard-iframe" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: "DashboardViewer",
  computed: {
    iframeUrl() {
      // Get the slug from the route
      const slug = this.$route.params.slug;

      // Map the slug to its corresponding Netlify URL
      const dashboardUrls = {
        healthcare: "https://your-netlify-link/healthcare", // replace with actual URLs
        logistics: "https://joseph-johnson-logistics-demo.netlify.app/",
        "code-camp": "https://your-netlify-link/codecamp", // replace with actual
        finance: "https://your-netlify-link/finance",
        "hr-dashboard": "https://your-netlify-link/hr",
        sales: "https://your-netlify-link/sales",
        worksphere: "https://your-netlify-link/worksphere",
      };

      // Return the URL for the iframe based on the slug, or fallback to an error page
      return dashboardUrls[slug] || "https://your-netlify-link/error"; // fallback URL if slug is not found
    },
  },
};
</script>

<style scoped>
.dashboard-viewer {
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  margin: 0; /* Remove any default margin */
  padding: 0; /* Remove any default padding */
  overflow: hidden; /* Hide any overflow if the iframe content is larger than the viewport */
}

.dashboard-iframe {
  width: 100%; /* Make the iframe take up the full width */
  height: 100%; /* Make the iframe take up the full height */
  border: none; /* Remove the border of the iframe */
}
</style>
