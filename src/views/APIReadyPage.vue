<template>
  <div class="api-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1>API Ready Dashboards</h1>
      <p>
        Explore our selection of fully functional, API-ready dashboards. These
        pre-built templates are designed to seamlessly integrate with your data
        sources and APIs, allowing you to save time and focus on customization
        and deployment.
      </p>
    </section>

    <!-- Dashboard Grid -->
    <div class="dashboard-grid">
      <!-- Loop over the dashboards and render DashboardDemoCard -->
      <DashboardDemoCard
        v-for="(demo, index) in demos"
        :key="index"
        :name="demo.name"
        :image="demo.image"
        :index="index"
        @open-modal="openModal(demo)"
      />
    </div>

    <!-- DashboardModalCard -->
    <ModalCard
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
  name: "APIPage",
  components: {
    DashboardDemoCard,
    DashboardModalCard,
  },
  data() {
    return {
      demos: [
        { name: "Code Camp", image: "/Dashboard_Images/Logistics-4.png" },
        { name: "Healthcare", image: "/Dashboard_Images/Healthcare-2.png" },
        { name: "Logistics", image: "/Dashboard_Images/Logistics.png" },
        {
          name: "Sales Dashboard",
          image: "/Dashboard_Images/Logistics-3.png",
        },
        { name: "Healthcare", image: "/Dashboard_Images/amazon.png" },
        {
          name: "Sales Dashboard",
          image: "/Dashboard_Images/Sales_Dashboard.png",
        },
        { name: "Code Camp", image: "/Dashboard_Images/Code_Camp.png" },
        { name: "Logistics", image: "/Dashboard_Images/Logisitcs.png" },
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
    },
    buyNow() {
      console.log("Buying now for:", this.selectedDemo);
    },
  },
};
</script>

<style scoped>
.api-page {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.hero-section {
  margin-bottom: 30px;
}

.hero-section h1 {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 10px;
}

.hero-section p {
  font-size: 15px;
  font-weight: 300;
}

/* Dashboard Grid */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 10px;
}

@media (max-width: 1400px) {
  .dashboard-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1000px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

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
