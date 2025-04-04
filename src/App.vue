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
  font-family: "Inter Tight", sans-serif;
  color: rgb(34, 34, 34);
}

.content {
  display: flex;
  justify-content: center;
  padding: 10px 20px;
}

.main {
  width: 100%;
  max-width: 1800px;
}
</style>
