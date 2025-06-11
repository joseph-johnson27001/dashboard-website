<template>
  <div class="services-page">
    <div class="hero-section">
      <div class="hero-header">
        <h1>Services</h1>
        <p>
          Learn more about our available services - from custom contract work
          tailored to your project needs, to purchasing ready-made dashboard
          templates built for fast deployment and modern design.
        </p>
      </div>
    </div>

    <div class="services-grid">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="service-card"
        :style="{ animationDelay: index * 0.08 + 's' }"
      >
        <img :src="service.image" :alt="service.title" class="service-image" />
        <h2>{{ service.title }}</h2>
        <p class="price" v-html="service.price"></p>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    title: "One-Page Demo",
    price: "<s>£199</s> <strong>£99</strong>",
    description:
      "Get a fast one-page dashboard demo in 1 day. Includes layout, static navigation, KPI area, and up to 4 sample graphs. Perfect for inspiration and internal pitches.",
    image: "/Dashboard_Images/Code_Camp.webp",
  },
  {
    title: "Pre-made Dashboards",
    price: "From <strong>£99</strong> to <strong>£499</strong>",
    description:
      "Purchase professional dashboards ready to plug into your backend. Includes simulated API calls and modular components for seamless integration.",
    image: "/Dashboard_Images/Healthcare.webp",
  },
  {
    title: "Contract Work",
    price: "<s>£400/day</s> <strong>£200/day</strong>",
    description:
      "Hire me for frontend dashboard and UI development. Ideal for product teams that need quick turnarounds and clean, scalable interfaces.",
    image: "/Dashboard_Images/Logistics.webp",
  },
];
</script>

<style scoped>
.services-page {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.hero-section {
  margin-bottom: 20px;
}

.hero-section h1 {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 0px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 0px;
  letter-spacing: -1px;
}

.hero-section p {
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 300;
  line-height: 1.4;
  font-family: "Assistant";
}

.hero-header {
  margin-top: 10px;
  margin-bottom: 5px;
}

.service-card {
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  opacity: 0;
  animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 960px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}

.service-card {
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
}

.service-image {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

.service-card h2 {
  font-size: 18px;
  margin-top: 10px;
  padding: 0 20px;
  margin-bottom: 8px;
  color: #006ba6;
  font-weight: 600;
}

.service-card p {
  font-size: 15px;
  padding: 0 20px;
  line-height: 1.4;
  color: #333;
  font-family: "Assistant";
  font-weight: 300;
}

.price {
  margin-top: 8px;
  margin-bottom: 10px;
  font-size: 15px;
  color: #555;
}
</style>
