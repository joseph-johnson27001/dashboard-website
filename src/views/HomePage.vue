<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>Template Dashboards for your Business</h1>
        <p>
          Discover sleek, performant dashboards you can plug into your apps or
          use as inspiration. Build fast. Customize easily.
        </p>
        <div class="button-container">
          <router-link to="/dashboards" class="button"
            >View All Dashboards</router-link
          >
          <router-link to="/contact" class="button"
            >Request A Custom Dashboard</router-link
          >
          <router-link to="/how-it-works" class="button"
            >How It Works</router-link
          >
          <!-- New button -->
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
          name: "Logistics",
          image: "/Dashboard_Images/Logistics.png",
          type: "SP / Vue3 / ApexCharts",
        },
        {
          name: "Code Camp",
          image: "/Dashboard_Images/Code_Camp.png",
          type: "SP / Vue3 / ApexCharts",
        },
        {
          name: "Finance",
          image: "/Dashboard_Images/Finance.png",
          type: "MP / Vue3 / Chart.js",
        },
        {
          name: "Healthcare",
          image: "/Dashboard_Images/Healthcare.png",
          type: "SP / Vue3 / Chart.js",
        },
        {
          name: "HR Dashboard",
          image: "/Dashboard_Images/HR-Dashboard.png",
          type: "AR / Vue3 / ApexCharts",
        },
        {
          name: "Sales",
          image: "/Dashboard_Images/Code_Camp.png",
          type: "AR / Vue3 / ApexCharts",
        },
        {
          name: "Worksphere",
          image: "/Dashboard_Images/Code_Camp.png",
          type: "AR / Vue3 / ApexCharts",
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
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedDemo = null;
    },
    viewDemo() {
      console.log("Viewing demo for:", this.selectedDemo);
      // Implement demo view action here
    },
    buyNow() {
      console.log("Buying now for:", this.selectedDemo);
      // Implement buy action here
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
  padding: 20px 0px 15px 0px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.hero h1 {
  font-size: 34px;
  font-family: "Unica One", cursive;
  color: #333;
  letter-spacing: -1px;
  margin-bottom: 0px;
  padding-bottom: 0;
  margin-top: 10px;
}

.hero p {
  font-size: 16px;
  font-weight: 300;
  margin-top: 10px;
  margin-bottom: 20px;
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
