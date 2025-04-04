<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>Template Dashboards for Developers</h1>
        <p>
          Discover sleek, performant dashboards you can plug into your apps or
          use as inspiration. Build fast. Customize easily.
        </p>
        <div class="button-container">
          <router-link to="/hire" class="hire-button">Hire Me</router-link>
          <router-link to="/how-it-works" class="hire-button"
            >How It Works</router-link
          >
        </div>
      </div>
    </section>

    <!-- Latest Single Page Dashboards -->
    <section class="dashboard-section">
      <h2>Latest Single Page Dashboards</h2>
      <div class="dashboard-grid">
        <DashboardDemoCard
          v-for="(demo, index) in singlePageDemos"
          :key="'single-' + index"
          :name="demo.name"
          :image="demo.image"
          :index="index"
          @open-modal="openModal(demo.name)"
        />
      </div>
    </section>

    <!-- Latest Multi Page Dashboards -->
    <section class="dashboard-section">
      <h2>Latest Multi Page Dashboards</h2>
      <div class="dashboard-grid">
        <DashboardDemoCard
          v-for="(demo, index) in multiPageDemos"
          :key="'multi-' + index"
          :name="demo.name"
          :image="demo.image"
          :index="index"
          @open-modal="openModal(demo.name)"
        />
      </div>
    </section>

    <!-- Latest API Ready Dashboards -->
    <section class="dashboard-section">
      <h2>Latest API Ready Dashboards</h2>
      <div class="dashboard-grid">
        <DashboardDemoCard
          v-for="(demo, index) in apiReadyDemos"
          :key="'api-' + index"
          :name="demo.name"
          :image="demo.image"
          :index="index"
          @open-modal="openModal(demo.name)"
        />
      </div>
    </section>

    <!-- ModalCard -->
    <ModalCard
      :isOpen="isModalOpen"
      :title="selectedDemo"
      @close-modal="closeModal"
      @view-demo="viewDemo"
      @buy-now="buyNow"
    />
  </div>
</template>

<script>
import DashboardDemoCard from "@/components/UI/DashboardDemoCard.vue";
import ModalCard from "@/components/UI/ModalCard.vue";

export default {
  name: "HomePage",
  components: {
    DashboardDemoCard,
    ModalCard,
  },
  data() {
    return {
      singlePageDemos: [
        { name: "Code Camp", image: "/Dashboard_Images/Logistics-4.png" },
        { name: "Healthcare", image: "/Dashboard_Images/Healthcare-2.png" },
        { name: "Logistics", image: "/Dashboard_Images/Logistics.png" },
        { name: "Sales Dashboard", image: "/Dashboard_Images/Logistics-3.png" },
      ],
      multiPageDemos: [
        { name: "Healthcare", image: "/Dashboard_Images/amazon.png" },
        {
          name: "Sales Dashboard",
          image: "/Dashboard_Images/Sales_Dashboard.png",
        },
        { name: "Code Camp", image: "/Dashboard_Images/Code_Camp.png" },
        { name: "Logistics", image: "/Dashboard_Images/Logisitcs.png" },
      ],
      apiReadyDemos: [
        { name: "Logistics", image: "/Dashboard_Images/Logistics-4.png" },
        { name: "Healthcare", image: "/Dashboard_Images/Healthcare-2.png" },
        { name: "Code Camp", image: "/Dashboard_Images/Code_Camp.png" },
        { name: "Amazon", image: "/Dashboard_Images/amazon.png" },
      ],
      isModalOpen: false,
      selectedDemo: null,
    };
  },
  methods: {
    openModal(demoName) {
      this.selectedDemo = demoName;
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
  padding: 20px 20px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 10px;
}

.hero h1 {
  font-size: 30px;
  font-family: "Unica One", cursive;
  color: #006ba6;
  margin-bottom: 10px;
}

.hero p {
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}

.hire-button {
  background-color: #006ba6;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.hire-button:hover {
  background-color: #004f7c;
}

/* Section Headers */
.dashboard-section h2 {
  font-size: 22px;
  font-weight: 500;
  color: #006ba6;
  margin-bottom: 15px;
  font-family: "Unica One", cursive;
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
