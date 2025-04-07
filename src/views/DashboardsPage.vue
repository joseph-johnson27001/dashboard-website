<template>
  <div class="dashboard-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-header">
        <h1>Dashboards</h1>
        <i
          class="far fa-circle-question info-icon"
          @click="showInfo = true"
          title="Dashboard Information"
        ></i>
      </div>
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

    <!-- DashboardModalCard -->
    <DashboardModalCard
      :isOpen="isModalOpen"
      :title="selectedDemo"
      :image="selectedDashboardImage"
      :description="selectedDescription"
      :type="selectedType"
      :price="selectedPrice"
      @close-modal="closeModal"
      @view-demo="viewDemo"
      @buy-now="buyNow"
    />

    <!-- Information Modal Card -->
    <InformationModalCard :isOpen="showInfo" @close-modal="showInfo = false" />
  </div>
</template>

<script>
import DashboardDemoCard from "@/components/UI/DashboardDemoCard.vue";
import DashboardModalCard from "@/components/UI/DashboardModalCard.vue";
import InformationModalCard from "@/components/UI/InformationModalCard.vue";

export default {
  name: "DashboardsPage",
  components: {
    DashboardDemoCard,
    DashboardModalCard,
    InformationModalCard,
  },
  data() {
    return {
      demos: [
        {
          name: "Healthcare",
          image: "/Dashboard_Images/Healthcare.png",
          type: "SP / Vue3 / Chart.js",
          description:
            "A dashboard built for modern healthcare analytics with Chart.js.",
          price: "£799",
        },
        {
          name: "Logistics",
          image: "/Dashboard_Images/Logistics.png",
          type: "SP / Vue3 / ApexCharts",
          description:
            "Streamline supply chain insights and logistics performance with rich visuals.",
          price: "£399",
        },
        {
          name: "Code Camp",
          image: "/Dashboard_Images/Code_Camp.png",
          type: "SP / Vue3 / ApexCharts",
          description:
            "Built for dev bootcamps and online learning platforms to track progress and engagement.",
          price: "£399",
        },
        {
          name: "Finance",
          image: "/Dashboard_Images/Finance.png",
          type: "SP / Vue3 / Chart.js",
          description:
            "A robust financial dashboard for visualizing revenue, expenses, and forecasting.",
          price: "£399",
        },
        {
          name: "HR Dashboard",
          image: "/Dashboard_Images/HR-Dashboard.png",
          type: "AR / Vue3 / ApexCharts",
          description:
            "Keep tabs on headcount, performance metrics, and employee engagement at a glance.",
          price: "£999",
        },
        {
          name: "Sales",
          image: "/Dashboard_Images/Sales.png",
          type: "SP / Vue3 / ApexCharts",
          description:
            "Built for sales teams to monitor pipelines, conversion rates, and revenue trends.",
          price: "£399",
        },
        {
          name: "Worksphere",
          image: "/Dashboard_Images/Worksphere.png",
          type: "MP / Vue3 / ApexCharts",
          description:
            "A workplace insights dashboard focusing on productivity, space usage, and activity patterns.",
          price: "£799",
        },
      ],
      showInfo: false,
      isModalOpen: false,
      selectedDemo: "",
      selectedDashboardImage: "",
    };
  },
  methods: {
    openModal(demo) {
      this.selectedDemo = demo.name;
      this.selectedDashboardImage = demo.image;
      this.selectedDescription = demo.description;
      this.selectedPrice = demo.price;
      this.selectedType = demo.type;
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
  margin-bottom: 20px;
}

.hero-section h1 {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 10px;
  letter-spacing: -1px;
}

.hero-section p {
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 300;
  line-height: 1.4;
  font-family: "Assistant";
}

.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-icon {
  font-size: 20px;
  color: #006ba6;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

/* Dashboard Grid */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
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
