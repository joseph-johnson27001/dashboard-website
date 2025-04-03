<template>
  <div id="app">
    <TopNavigation />
    <router-view />
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
#app {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}
</style>
