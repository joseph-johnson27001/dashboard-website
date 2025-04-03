<template>
  <div class="dashboard-card" @click="openModal">
    <div class="image-container">
      <img :src="image" :alt="name" class="dashboard-image" />
      <div class="overlay"></div>
    </div>
    <div class="dashboard-name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "DashboardDemoCard",
  props: {
    name: String,
    image: String,
  },
  methods: {
    openModal() {
      this.$emit("open-modal", this.name);
    },
  },
};
</script>

<style scoped>
.dashboard-card {
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease;
}

.dashboard-card:hover .image-container .overlay {
  opacity: 0.2;
}

.image-container {
  position: relative;
  display: inline-block;
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.dashboard-image {
  width: 100%;
  max-width: 100%;
  height: 100%;
  aspect-ratio: 16 / 12;
  transition: opacity 0.2s ease;
  box-sizing: border-box;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.dashboard-name {
  text-align: left;
  margin-top: 6px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;
  font-family: "Unica One", cursive;
  color: rgb(24, 24, 24);
}
</style>
