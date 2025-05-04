<template>
  <div id="app" v-bind:class="{ 'app-not-dashboard': !isDashboardRoute }">
    <!-- Show TopNavigation and layout only if it's NOT a dashboard route -->
    <TopNavigation v-if="!isDashboardRoute" />

    <div v-if="!isDashboardRoute" class="content">
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TopNavigation from "./components/Navigation/TopNavigation.vue";

export default {
  name: "App",
  components: {
    TopNavigation,
  },
};
</script>

<style>
/* Hacky fix to stop scroller disappearing - delete when no longer needed */
.app-not-dashboard {
  min-height: 101vh;
}

body {
  margin: 0;
  background-color: #f8f8f8;
  font-family: "Assistant", sans-serif;
  color: rgb(34, 34, 34);
}

.content {
  display: flex;
  justify-content: center;
  padding: 10px 20px 20px 20px;
}

.main {
  width: 100%;
  max-width: 1800px;
}

.highlight-blue {
  color: #006ba6 !important;
  font-weight: 500 !important;
}

/* Global style file — NOT scoped */
@-moz-document url-prefix() {
  .hero h1 {
    letter-spacing: -3px !important;
  }
}

/* Safari-specific override */
@supports (-webkit-touch-callout: none) {
  .hero h1 {
    letter-spacing: -3px !important;
  }
}
</style>
