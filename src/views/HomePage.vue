<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>Template Dashboards for your Business</h1>
        <p>
          Professionally developed dashboards built around real business needs.
          Hire for tailored solutions, or explore ready-made templates for quick
          integration.
        </p>
        <div class="button-container">
          <router-link to="/dashboards" class="button"
            >View All Dashboards</router-link
          >
          <router-link to="/contact" class="button"
            >Request A Dashboard</router-link
          >
          <router-link to="/how-it-works" class="button"
            >How It Works</router-link
          >
        </div>
      </div>
    </section>

    <section class="dashboard-section">
      <h2>Latest Dashboards</h2>
      <div class="dashboard-grid">
        <DashboardDemoCard
          v-for="(demo, index) in demos"
          :key="index"
          :name="demo.name"
          :image="demo.image"
          :index="index"
          :type="demo.type"
          @open-modal="openModal(demo)"
        />
      </div>
    </section>

    <!-- DashboardModalCard -->
    <DashboardModalCard
      :isOpen="isModalOpen"
      :title="selectedDemo"
      :image="selectedDashboardImage"
      :description="selectedDescription"
      :price="selectedPrice"
      :type="selectedType"
      :slug="selectedSlug"
      @close-modal="closeModal"
      @view-demo="viewDemo"
      @buy-now="buyNow"
    />
  </div>
</template>

<script>
import DashboardDemoCard from "@/components/UI/DashboardDemoCard.vue";
import DashboardModalCard from "@/components/UI/DashboardModalCard.vue";

export default {
  name: "HomePage",
  components: {
    DashboardDemoCard,
    DashboardModalCard,
  },
  data() {
    return {
      demos: [
        {
          name: "Healthcare",
          slug: "healthcare",
          image: "/Dashboard_Images/Healthcare.png",
          type: "MP / Vue3 / Chart.js",
          description:
            "A modern, fully responsive, multi-page healthcare dashboard including KPIs, interactive charts, searchable paginated tables, modals for data entry, and built-in layout/navigation.",
          price: "£799",
        },
        {
          name: "Logistics",
          slug: "logistics",
          image: "/Dashboard_Images/Logistics.png",
          type: "SP / Vue3 / ApexCharts",
          description:
            "A clean, responsive single-page dashboard designed for logistics and supply chain insights. Includes key KPIs, dynamic charts powered by ApexCharts, and a styled sidebar.",
          price: "£399",
        },
        {
          name: "Code Camp",
          slug: "code-camp",
          image: "/Dashboard_Images/Code_Camp.png",
          type: "SP / Vue3 / ApexCharts",
          description:
            "A dark-themed single-page dashboard built for online education platforms. Features user information, KPIs and interactive ApexCharts for visualizing user engagement and course progress",
          price: "£399",
        },
        {
          name: "Finance",
          slug: "finance",
          image: "/Dashboard_Images/Finance.png",
          type: "SP / Vue3 / Chart.js",
          description:
            "A robust financial dashboard for visualizing revenue, expenses, and forecasting.",
          price: "£399",
        },
        {
          name: "HR Dashboard",
          slug: "hr-dashboard",
          image: "/Dashboard_Images/HR-Dashboard.png",
          type: "AR / Vue3 / ApexCharts",
          description:
            "Keep tabs on headcount, performance metrics, and employee engagement at a glance.",
          price: "£999",
        },
        {
          name: "Sales",
          slug: "sales",
          image: "/Dashboard_Images/Sales.png",
          type: "SP / Vue3 / ApexCharts",
          description:
            "Built for sales teams to monitor pipelines, conversion rates, and revenue trends.",
          price: "£399",
        },
        {
          name: "Worksphere",
          slug: "worksphere",
          image: "/Dashboard_Images/Worksphere.png",
          type: "MP / Vue3 / ApexCharts",
          description:
            "A workplace insights dashboard focusing on productivity, space usage, and activity patterns.",
          price: "£799",
        },
      ],
      isModalOpen: false,
      selectedDemo: null,
    };
  },
  methods: {
    openModal(demo) {
      this.selectedDemo = demo.name;
      this.selectedDashboardImage = demo.image;
      this.selectedDescription = demo.description;
      this.selectedPrice = demo.price;
      this.selectedType = demo.type;
      this.selectedSlug = demo.slug;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedDemo = null;
    },
    viewDemo() {
      console.log("Viewing demo for:", this.selectedDemo);
    },
    buyNow() {
      console.log("Buying now for:", this.selectedDemo);
    },
  },
};
</script>

<style scoped>
.home-page {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.hero {
  padding: 0px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.hero h1 {
  font-size: 38px;
  font-family: "Unica One", cursive;
  color: #333;
  letter-spacing: -1px;
  margin-bottom: 0px;
  padding-bottom: 0;
  margin-top: 10px;
}

.hero p {
  font-size: 17px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 300;
  line-height: 1.4;
  font-family: "Assistant";
}

.button-container {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.button {
  background-color: #006ba6;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 500;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #004f7c;
}

/* Section Headers */
.dashboard-section h2 {
  font-size: 22px;
  font-weight: 500;
  color: #006ba6;
  margin-bottom: 15px;
  font-family: "Unica One", cursive;
  letter-spacing: -1px;
}

/* Dashboard Grid */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 20px;
}

@media (max-width: 1200px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    /* transform: translateY(10px); */
  }
  to {
    opacity: 1;
    /* transform: translateY(0); */
  }
}
</style>
