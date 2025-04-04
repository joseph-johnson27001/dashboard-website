<template>
  <div
    class="dashboard-card fade-in"
    :style="{ animationDelay: index * 0.08 + 's' }"
    @click="openModal"
  >
    <div class="image-container">
      <img :src="image" :alt="name" class="dashboard-image" />
      <div class="overlay"></div>
    </div>
    <div class="dashboard-meta">
      <div class="dashboard-name">{{ name }}</div>
      <div class="tag">{{ type }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardDemoCard",
  props: {
    name: String,
    image: String,
    index: Number,
    type: String,
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
  opacity: 0;
  animation: fadeIn 0.8s ease-in forwards;
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
  transition: opacity 0.6s ease;
  display: block;
  border-radius: 4px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.dashboard-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
}

.dashboard-name {
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;
  font-family: "Unica One", cursive;
  color: rgb(24, 24, 24);
  letter-spacing: -1px;
}

.tag {
  background-color: #f0f0f0;
  font-family: sans-serif;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  white-space: nowrap;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
