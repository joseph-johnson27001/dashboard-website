<template>
  <div class="dashboard-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1>Dashboards</h1>
      <p>
        Browse a curated collection of professional dashboards built for
        performance, flexibility, and fast integration. Whether you're looking
        for inspiration or a ready-to-go solution, these templates are made to
        plug into your workflow with ease.
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
        :type="demo.type"
        @open-modal="openModal(demo)"
      />
    </div>

    <!-- ModalCard -->
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
import ModalCard from "@/components/UI/ModalCard.vue";

export default {
  name: "DashboardsPage",
  components: {
    DashboardDemoCard,
    ModalCard,
  },
  data() {
    return {
      demos: [
        {
          name: "Code Camp",
          image: "/Dashboard_Images/Logistics-4.png",
          type: "SP / Vue3 / ApexCharts",
        },
        {
          name: "Healthcare",
          image: "/Dashboard_Images/Healthcare-2.png",
          type: "MP",
        },
        {
          name: "Logistics",
          image: "/Dashboard_Images/Logistics.png",
          type: "SP",
        },
        {
          name: "Sales Dashboard",
          image: "/Dashboard_Images/Logistics-3.png",
          type: "SP",
        },
        {
          name: "Healthcare",
          image: "/Dashboard_Images/amazon.png",
          type: "MP",
        },
        {
          name: "Sales Dashboard",
          image: "/Dashboard_Images/Sales_Dashboard.png",
          type: "SP",
        },
        {
          name: "Code Camp",
          image: "/Dashboard_Images/Code_Camp.png",
          type: "SP",
        },
        {
          name: "Logistics",
          image: "/Dashboard_Images/Logisitcs.png",
          type: "SP",
        },
        {
          name: "Code Camp",
          image: "/Dashboard_Images/Logistics-4.png",
          type: "SP",
        },
        {
          name: "Healthcare",
          image: "/Dashboard_Images/Healthcare-2.png",
          type: "MP",
        },
        {
          name: "Logistics",
          image: "/Dashboard_Images/Logistics.png",
          type: "SP",
        },
        {
          name: "Sales Dashboard",
          image: "/Dashboard_Images/Logistics-3.png",
          type: "AR",
        },
        {
          name: "Healthcare",
          image: "/Dashboard_Images/amazon.png",
          type: "SP",
        },
        {
          name: "Sales Dashboard",
          image: "/Dashboard_Images/Sales_Dashboard.png",
          type: "AR",
        },
        {
          name: "Code Camp",
          image: "/Dashboard_Images/Code_Camp.png",
          type: "SP",
        },
        {
          name: "Logistics",
          image: "/Dashboard_Images/Logisitcs.png",
          type: "SP",
        },
      ],
      isModalOpen: false,
      selectedDemo: "",
      selectedDashboardImage: "",
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
.dashboard-page {
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
  letter-spacing: -1px;
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
