<template>
  <div id="app">
    <TopNavigation />
    <div class="content">
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
body {
  margin: 0;
  background-color: #f8f8f8;
  font-family: "Assistant", sans-serif;
  color: rgb(34, 34, 34);
}

#app {
  min-height: 101dvh;
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
</style>
