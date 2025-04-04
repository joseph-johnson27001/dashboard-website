<template>
  <div class="how-it-works-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>How It Works</h1>
        <p>
          Learn about the different types of dashboards and how we can create
          the perfect solution tailored to your needs.
        </p>
      </div>
    </section>

    <!-- Dashboards Overview -->
    <section class="dashboards-overview">
      <div class="dashboard-types">
        <!-- Single Page Dashboards -->
        <div class="dashboard-type">
          <h3>Single Page Dashboards</h3>
          <p>
            A single page dashboard is a compact, fast-loading solution
            displaying all necessary data in one page. Perfect for projects that
            need speed and simplicity.
          </p>
        </div>

        <!-- Multi Page Dashboards -->
        <div class="dashboard-type">
          <h3>Multi Page Dashboards</h3>
          <p>
            Multi-page dashboards provide a more detailed and organized
            experience with separate pages for each section of the data. Great
            for large-scale applications that require deeper categorization.
          </p>
        </div>

        <!-- API Ready Dashboards -->
        <div class="dashboard-type">
          <h3>API Ready Dashboards</h3>
          <p>
            API-ready dashboards are designed to seamlessly integrate with your
            data sources. This is a great choice if you need pre-built templates
            that are ready to hook up with APIs for real-time data processing.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HowItWorksPage",
};
</script>

<style scoped>
.how-it-works-page {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.hero h1 {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 10px;
}

p {
  font-size: 15px;
  font-weight: 300;
}

/* Dashboards Overview */
.dashboard-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.dashboard-type h3 {
  font-family: "Unica One", cursive;
  color: #006ba6;
  margin-bottom: 15px;
  font-size: 22px;
}

.dashboard-type p {
  font-size: 16px;
  font-weight: 300;
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
