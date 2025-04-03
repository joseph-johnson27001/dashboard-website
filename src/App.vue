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
  background-color: #25293c;
  font-family: "Inter Tight", sans-serif;
  color: #c1bfd6;
}

.content {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.main {
  width: 100%;
  max-width: 1200px;
}
</style>
