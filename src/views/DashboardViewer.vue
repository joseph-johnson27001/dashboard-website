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
        healthcare: "https://joseph-johnson-healthcare-dashboard.netlify.app/",
        logistics: "https://joseph-johnson-logistics-demo.netlify.app/",
        "code-camp": "https://joseph-johnson-code-camp.netlify.app/",
        finance: "https://joseph-johnson-finance-demo.netlify.app/",
        "hr-dashboard": "https://joseph-johnson-hr-dashboard.netlify.app/",
        sales: "https://joseph-johnson-dashboard-demo.netlify.app/",
        worksphere: "https://joseph-johnson-worksphere-dashboard.netlify.app/",
      };

      return dashboardUrls[slug];
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
