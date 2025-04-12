<template>
  <div id="app">
    <!-- Show TopNavigation and layout only if it's NOT a dashboard route -->
    <TopNavigation v-if="!isDashboardRoute" />

    <div v-if="!isDashboardRoute" class="content">
      <div class="main">
        <router-view />
      </div>
    </div>

    <!-- For dashboard routes, show router-view full screen -->
    <div v-else class="dashboard-view">
      <router-view />
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
  computed: {
    isDashboardRoute() {
      return this.$route.path.includes("dashboard-demo");
    },
  },
};
</script>

<style>
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

.dashboard-view {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
