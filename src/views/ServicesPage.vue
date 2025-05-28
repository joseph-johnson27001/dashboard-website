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

    <section class="service-block">
      <h2>🧭 Consultation</h2>
      <p>
        <strong>Rate:</strong> Free &nbsp; | &nbsp;
        <strong>Timeframe:</strong> ~1 Hour
      </p>
      <p>
        A no-pressure call to discuss your project. We’ll cover layout ideas,
        technical needs, and whether my services are the right fit for your
        goals.
      </p>
    </section>

    <section class="service-block">
      <h2>🧪 One Page Build</h2>
      <p>
        <strong>Rate:</strong> £199 &nbsp; | &nbsp;
        <strong>Timeframe:</strong> 1–2 Days
      </p>
      <p>
        A fully built landing or dashboard page with a placeholder nav. Great as
        a prototype or starting point to validate direction without heavy
        investment.
      </p>
    </section>

    <section class="service-block">
      <h2>📂 Multi Page Build</h2>
      <p>
        <strong>Rate:</strong> £400/day &nbsp; | &nbsp;
        <strong>Timeframe:</strong> Depends on scope
      </p>
      <p>
        A fully functional, API-ready frontend built to your designs. Includes
        navigation, reusable components, simulated API responses, and responsive
        layout.
      </p>
    </section>

    <section class="service-block">
      <h2>🔧 Contract / Integration Work</h2>
      <p>
        <strong>Rate:</strong> £400/day &nbsp; | &nbsp;
        <strong>Timeframe:</strong> Negotiable
      </p>
      <p>
        Available for longer-term frontend work or integration help. I can plug
        into your team to build, refactor, or scale dashboards using Vue,
        Tailwind, and modern tooling.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
  data() {
    return {};
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

.service-block {
  margin-top: 25px;
}

.service-block h2 {
  font-family: "Unica One", cursive;
  font-size: 20px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 0;
  letter-spacing: -0.5px;
}

.service-block p {
  font-size: 16px;
  font-family: "Assistant";
  color: #333;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 8px;
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
