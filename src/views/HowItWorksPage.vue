<template>
  <div class="how-it-works-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>Dashboard Types</h1>
        <p>
          Explore the different types of dashboards available, the purchase
          process, and how tailored solutions can help elevate your business.
        </p>
      </div>
    </section>

    <!-- Dashboards Overview -->
    <section class="dashboards-overview">
      <div class="dashboard-container">
        <div
          v-for="(dashboard, index) in dashboards"
          :key="index"
          class="dashboard-card fade-in"
          :style="{ animationDelay: index * 0.08 + 's' }"
        >
          <div class="image-container">
            <img
              :src="dashboard.image"
              :alt="dashboard.title"
              class="dashboard-image"
            />
          </div>
          <div class="dashboard-meta">
            <div class="dashboard-name">{{ dashboard.title }}</div>
            <div class="tag">{{ dashboard.type }}</div>
          </div>
          <!-- Description List (without list style) -->
          <div class="dashboard-description">
            <ul>
              <li v-for="(item, idx) in dashboard.descriptionList" :key="idx">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment and Contact Section -->
    <section class="payment-method">
      <h1>Purchase and Customization</h1>
      <p>
        Currently, if you would like to purchase a site, please get in contact
        with us directly. We’ll guide you through the purchase process and
        ensure you get exactly what you need.
      </p>
      <p>
        In the future, you'll be able to download directly from the site, but
        for now, contacting us is the best way to move forward.
      </p>
      <p>
        Rest assured, when you make a purchase, you will receive a fully
        functional site that is identical to the demo you’ve seen. You can trust
        that the features and layout will match what you experienced during the
        demo.
      </p>
      <p>
        Although each dashboard type (e.g., HR Dashboard) is shown with a
        specific structure and data, you have complete freedom to customize it.
        You’re not limited to the default setup – everything can be tailored to
        fit your unique needs.
      </p>
      <p>
        If you have a specific request for custom changes or a completely new
        dashboard idea in mind, don't hesitate to reach out. We can help bring
        your vision to life and build something that perfectly aligns with your
        requirements.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "HowItWorksPage",
  data() {
    return {
      dashboards: [
        {
          title: "Single Page Dashboards",
          image: "/Dashboard_Images/Code_Camp.png",
          type: "Basic",
          descriptionList: [
            "Compact and fast-loading for quick visualizations.",
            "Ideal for inspiration, providing a foundation that can be expanded.",
            "Reusable components for building and customizing new features.",
            "Can integrate graphs, charts, and various data visualizations.",
          ],
        },
        {
          title: "Multi Page Dashboards",
          image: "/Dashboard_Images/Code_Camp2.png",
          type: "Advanced",
          descriptionList: [
            "Structured with multiple pages for different sections.",
            "Perfect for large-scale applications with complex workflows.",
            "Flexible framework for building various views and layouts.",
            "Integrates well with backend services for data-driven insights.",
          ],
        },
        {
          title: "API Ready Dashboards",
          image: "/Dashboard_Images/Healthcare-2.png",
          type: "API-Integrated",
          descriptionList: [
            "No pre-filled data, designed for custom API integration.",
            "Simulates API calls with mock data for backend testing.",
            "Easy integration with your existing data systems.",
            "Supports real-time updates and dynamic data fetching.",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.how-it-works-page {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

/* Hero Section */
h1 {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 10px;
  color: #006ba6;
  margin-top: 10px;
  letter-spacing: -1px;
  font-weight: 400;
}

p {
  margin-top: 0px;
  margin-bottom: 8px;
  font-weight: 300;
}

.hero-text p {
  margin-top: 5px;
}

.dashboard-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
  box-sizing: border-box;
}

.dashboard-card {
  transition: transform 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.8s ease-in forwards;
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

.dashboard-meta {
  display: flex;
  justify-content: space-between;
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

.dashboard-description ul {
  padding: 0;
  padding-top: 10px;
  margin: 0;
  list-style-type: none;
}

.dashboard-description li {
  font-weight: 300;
  margin-bottom: 5px;
}

.payment-method {
  margin-top: 30px;
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
