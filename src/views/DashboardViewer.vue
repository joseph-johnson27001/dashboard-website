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
      const slug = this.$route.params.slug;

      // Map the slug to its corresponding Netlify URL
      const dashboardUrls = {
        healthcare: "https://your-netlify-link/healthcare",
        logistics: "https://joseph-johnson-logistics-demo.netlify.app/",
        "code-camp": "https://your-netlify-link/codecamp",
        finance: "https://your-netlify-link/finance",
        "hr-dashboard": "https://your-netlify-link/hr",
        sales: "https://your-netlify-link/sales",
        worksphere: "https://your-netlify-link/worksphere",
      };

      return dashboardUrls[slug] || "https://your-netlify-link/error";
    },
  },
};
</script>

<style scoped>
.dashboard-viewer {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.dashboard-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
