<template>
  <div class="demos-page">
    <div class="dashboard-grid">
      <!-- Loop over the dashboards and render DashboardDemoCard -->
      <DashboardDemoCard
        v-for="(demo, index) in demos"
        :key="index"
        :name="demo.name"
        :image="demo.image"
        @open-modal="openModal(demo.name)"
      />
    </div>
    <!-- Modal (for demo information) -->
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal">
        <h2>{{ selectedDemo }}</h2>
        <p>Information about the {{ selectedDemo }} demo...</p>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardDemoCard from "@/components/UI/DashboardDemoCard.vue";

export default {
  name: "DemosPage",
  components: {
    DashboardDemoCard,
  },
  data() {
    return {
      demos: [
        { name: "Code Camp", image: "/Dashboard_Images/Code_Camp.png" },
        { name: "Healthcare", image: "/Dashboard_Images/Healthcare.png" },
        { name: "Logistics", image: "/Dashboard_Images/Logisitcs.png" },
        {
          name: "Sales Dashboard",
          image: "/Dashboard_Images/Sales_Dashboard.png",
        },
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
  },
};
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for large screens */
  gap: 20px;
  margin-top: 20px;
}

@media (max-width: 1200px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }
}

@media (max-width: 600px) {
  .dashboard-grid {
    grid-template-columns: 1fr; /* 1 column for small screens */
  }
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
}

button {
  background-color: #2e3348;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

button:hover {
  background-color: #444;
}
</style>
