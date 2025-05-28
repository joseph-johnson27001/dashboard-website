<template>
  <div class="services-page">
    <h1>Services</h1>
    <section class="intro-section">
      <p>
        Whether you're looking to test an idea with a single-page MVP or need a
        full API-ready frontend for your product, I offer flexible, scalable
        frontend services tailored to your goals.
      </p>
      <p>
        Each service is designed to help you move fast, integrate easily, and
        scale confidently. Here’s how we can work together:
      </p>
    </section>

    <section class="services-grid">
      <section
        class="service-block"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="icon-circle" :class="service.color">
          <i :class="service.icon"></i>
        </div>
        <h2>{{ service.title }}</h2>
        <p class="details">{{ service.details }}</p>
        <p>{{ service.description }}</p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      services: [
        {
          title: "Consultation",
          details: "Free • ~1 Hour",
          description:
            "A no-pressure call to discuss your project. We’ll cover layout ideas, technical needs, and whether my services are the right fit for your goals.",
          icon: "fa-regular fa-compass",
          color: "blue",
        },
        {
          title: "One Page Build",
          details: "£199 • 1–2 Days",
          description:
            "A fully built landing or dashboard page with a placeholder nav. Great as a prototype or starting point to validate direction without heavy investment.",
          icon: "fa-regular fa-file-code",
          color: "purple",
        },
        {
          title: "Multi Page Build",
          details: "£400/day • Depends on scope",
          description:
            "A fully functional, API-ready frontend built to your designs. Includes navigation, reusable components, simulated API responses, and responsive layout.",
          icon: "fa-regular fa-folder-open",
          color: "orange",
        },
        {
          title: "Contract / Integration Work",
          details: "£400/day • Negotiable",
          description:
            "Available for longer-term frontend work or integration help. I can plug into your team to build, refactor, or scale dashboards using Vue, Tailwind, and modern tooling.",
          icon: "fa-regular fa-handshake",
          color: "green",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services-page {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

h1 {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 10px;
  letter-spacing: -1px;
}

.intro-section p {
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #222;
  font-weight: 300;
  line-height: 1.4;
  font-family: "Assistant";
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 20px;
}

.service-block {
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  text-align: center;
}

.icon-circle {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 0 auto 10px;
}

.icon-circle i {
  font-size: 25px;
}

/* Icon Color Variants */
.icon-circle.blue {
  background-color: rgba(0, 107, 166, 0.15);
  color: #006ba6;
}
.icon-circle.purple {
  background-color: rgba(156, 39, 176, 0.15);
  color: #9c27b0;
}
.icon-circle.orange {
  background-color: rgba(245, 124, 0, 0.15);
  color: #f57c00;
}
.icon-circle.green {
  background-color: rgba(46, 125, 50, 0.15);
  color: #2e7d32;
}

.service-block h2 {
  font-family: "Unica One", cursive;
  font-size: 18px;
  margin-bottom: 6px;
  font-weight: 500;
  color: #006ba6;
  letter-spacing: -0.5px;
}

.details {
  font-size: 15px;
  font-weight: 400;
  color: #444;
  margin-bottom: 10px;
  font-family: "Assistant";
}

.service-block p {
  font-size: 15px;
  font-family: "Assistant";
  color: #333;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 6px;
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

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
