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
        <p class="price">
          <span v-html="service.price"></span>
          <span v-if="service.discountNote">*</span>
        </p>
        <p>{{ service.description }}</p>
      </div>
    </div>

    <p class="launch-pricing-note">
      * Launch pricing available for all services until August 31, 2025.
    </p>

    <!-- Call to Action Section -->
    <div class="cta-section">
      <a href="/dashboards" class="cta-button explore-button"
        >Explore Dashboards</a
      >
      <a href="/contact" class="cta-button contact-button">Contact</a>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    title: "Custom Single Page Demo",
    price: "<s>£199</s>  <strong>*£99</strong>",
    description:
      "Get a fast one-page dashboard demo in 1 day. Includes layout, static navigation, KPI area, and up to 4 sample graphs. Perfect for inspiration and internal pitches.",
    image: "/Dashboard_Images/Logistics.webp",
  },
  {
    title: "Single-Page Dashboard",
    price: "<s>£199</s>  <strong>*£99</strong>",
    description:
      "Pre-built single-page dashboard, ideal for simpler projects. Comes with simulated API calls and clean modular components.",
    image: "/Dashboard_Images/Finance.webp",
  },
  {
    title: "Multi-Page Dashboard",
    price: "<s>£899</s>  <strong>*£499</strong>",
    description:
      "Comprehensive multi-page dashboard designed for complex apps. Built with backend devs in mind and fully modular.",
    image: "/Dashboard_Images/Healthcare.webp",
  },
  {
    title: "Contract Work",
    price: "<s>£400/day</s>  <strong>*£200/day</strong>",
    description:
      "Hire me for frontend dashboard and UI development. Ideal for product teams that need quick turnarounds and clean, scalable interfaces.",
    image: "/Dashboard_Images/Code_Camp.webp",
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

.hero-header {
  margin-top: 10px;
  margin-bottom: 5px;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.service-card {
  background: #fff;
  border-radius: 9px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  opacity: 0;
  animation: fadeIn 0.8s ease-in forwards;
}

.service-image {
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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

.launch-pricing-note {
  font-size: 14px;
  color: #c0392b;
  font-style: italic;
  text-align: right;
  padding-right: 5px;
  font-weight: 500;
  margin-bottom: -4px;
}

/* CTA Section */
.cta-section {
  margin-top: 0px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.cta-button {
  font-family: "Inter Tight", sans-serif;
  background-color: #006ba6;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  font-weight: 500;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-top: 15px;
  border: none;
  max-width: 150px;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 1.5s 0.25s forwards;
}

.cta-button:hover {
  background-color: #004f7c;
}

/* Responsive Grid */
@media (max-width: 1100px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 550px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 400px) {
  .cta-section {
    flex-direction: column;
    gap: 0px;
    justify-content: center;
  }

  .cta-button {
    width: 100%;
    max-width: none;
    box-sizing: border-box;
  }
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
