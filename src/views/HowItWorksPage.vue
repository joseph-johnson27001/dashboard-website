<template>
  <div class="how-it-works-page">
    <!-- Dashboards Overview -->
    <section class="dashboards-overview">
      <h1>Dashboard Types</h1>
      <p>
        Whether you're looking for a simple layout to get started or a
        full-featured interface ready to plug into your data, these dashboard
        types cover a range of use cases. Each template is fully customizable
        and built with flexibility in mind — making it easy to adapt them to
        your workflow or industry.
      </p>
      <p class="disclaimer">
        * While dashboards are initially tailored to specific industries (like
        HR or healthcare), all designs are fully customizable and can be adapted
        to suit any business or use case.
      </p>
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

    <!-- Purchase Section -->
    <!-- <section class="payment-method">
      <h1>Use a Template — Quick & Easy</h1>
      <p>
        Dashboards can be purchased directly through the site, giving you
        instant access to the full source code. Each download includes clear
        setup instructions to help you get up and running quickly.
      </p>
      <p>
        The codebase is fully commented to help you understand how the different
        pieces fit together. Whether you're adapting a chart, modifying the
        layout, or integrating new data sources, the structure is designed to be
        developer-friendly.
      </p>
      <p>
        What you see in the demo is exactly what you'll get — a complete,
        functional dashboard ready to drop into your project or customize as
        needed.
      </p>
      <p>
        If you need help modifying a template, or you have something more custom
        in mind, you can always get in touch. Dashboards can be built or
        extended to meet your specific requirements.
      </p>
    </section> -->

    <!-- Custom Section -->
    <section class="custom-builds">
      <h1>Need Something Custom Built?</h1>
      <p>
        Need something tailored from the ground up? Custom dashboards can be
        designed and developed to match your exact specifications, business
        logic, and branding.
      </p>
      <p>
        Whether you’re starting with a rough concept or have detailed
        requirements, the build process is structured to be collaborative and
        efficient—ensuring the end result aligns with your vision.
      </p>
      <p>
        From data structure and layout to performance and maintainability, every
        aspect is built with flexibility and long-term use in mind.
      </p>
      <p>
        To begin discussing a custom build, just get in touch using the contact
        form. You'll receive a clear breakdown of timelines, process, and
        pricing.
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
          image: "/Dashboard_Images/Healthcare.png",
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
          image: "/Dashboard_Images/HR-Dashboard.png",
          type: "API-Integration Ready",
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
  font-size: 17px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 300;
  font-family: "Assistant";
}

.disclaimer {
  font-size: 16px;
  font-style: italic;
  color: #333;
  margin-top: 10px;
}

.dashboard-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 20px;
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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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

.payment-method,
.custom-builds {
  margin-top: 30px;
}

.dashboard-description li {
  font-size: 17px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 300;
  line-height: 1.2;
  font-family: "Assistant";
}

p {
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #222;
  font-weight: 300;
  font-family: "Assistant";
  line-height: 1.5;
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

@media (max-width: 1200px) {
  .dashboard-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .dashboard-container {
    grid-template-columns: 1fr;
  }
}
</style>
