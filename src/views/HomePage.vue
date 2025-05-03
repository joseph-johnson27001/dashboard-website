<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>Template Dashboards for your Business</h1>
        <p>
          Professionally developed dashboard templates built around real
          business needs. Hire for tailored solutions, or explore ready-made
          templates for quick integration.
        </p>
        <div class="button-container">
          <router-link to="/dashboards" class="button"
            >View All Dashboards</router-link
          >
          <!-- <router-link to="/how-it-works" class="button"
            >How It Works</router-link
          > -->
          <router-link to="/contact" class="button"
            >Hire For Custom Work</router-link
          >
        </div>
      </div>
    </section>

    <section class="dashboard-section">
      <div class="latest-header">
        <h2>Latest Dashboards</h2>
        <i
          class="far fa-circle-question info-icon"
          @click="showInfo = true"
          title="Dashboard Information"
        ></i>
      </div>
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
      :note="selectedNote"
      @close-modal="closeModal"
    />
  </div>
  <!-- Information Modal Card -->
  <InformationModalCard :isOpen="showInfo" @close-modal="showInfo = false" />
</template>

<script>
import DashboardDemoCard from "@/components/UI/DashboardDemoCard.vue";
import DashboardModalCard from "@/components/UI/DashboardModalCard.vue";
import InformationModalCard from "@/components/UI/InformationModalCard.vue";

export default {
  name: "HomePage",
  components: {
    DashboardDemoCard,
    DashboardModalCard,
    InformationModalCard,
  },
  data() {
    return {
      showInfo: false,
      demos: [
        {
          name: "Code Camp",
          slug: "code-camp",
          image: "/Dashboard_Images/Code_Camp.png",
          type: "SP / Vue / ApexCharts",
          description:
            'A dark-themed <span class="highlight-blue">single-page</span> dashboard built for online education platforms. Features user information, KPIs and interactive ApexCharts for visualizing user engagement and course progress',
          price: "£399",
        },
        {
          name: "Healthcare",
          slug: "healthcare",
          image: "/Dashboard_Images/Healthcare.png",
          type: "MP / Vue / Apexcharts",
          description:
            'A modern, fully responsive, <span class="highlight-blue">multi-page</span> healthcare dashboard including KPIs, interactive charts, searchable paginated tables, modals for data entry, and built-in layout/navigation.',
          price: "£799",
        },
        {
          name: "Logistics",
          slug: "logistics",
          image: "/Dashboard_Images/Logistics.png",
          type: "SP / Vue / Chart.js",
          description:
            'A clean, responsive <span class="highlight-blue">single-page</span> dashboard designed for logistics and supply chain insights. Includes key KPIs, dynamic charts powered by ApexCharts, and a styled sidebar.',
          price: "£399",
        },
        {
          name: "Finance",
          slug: "finance",
          image: "/Dashboard_Images/Finance.png",
          type: "SP / Vue / ApexCharts",
          description:
            'A sleek, <span class="highlight-blue">single-page</span> financial dashboard built with ApexCharts. Track revenue, expenses, and forecasting with clarity — an ideal starting point for finance teams.',
          price: "£399",
        },
        {
          name: "HR Dashboard",
          slug: "hr-dashboard",
          image: "/Dashboard_Images/HR-Dashboard.png",
          type: "AR / Vue / Chart.js",
          description:
            'A fully <span class="highlight-blue">API-ready</span>, <span class="highlight-blue">multi-page</span> HR dashboard built with Chart.js. Simulated API calls and a structured data folder make it easy to plug in real endpoints—just swap the calls, remove the mock data, and you’re live. Includes working navigation and a clean layout for tracking headcount, performance, and employee satisfaction.',
          price: "£999",
        },
        {
          name: "Sales",
          slug: "sales",
          image: "/Dashboard_Images/Sales.png",
          type: "SP / Vue / Chart.js",
          description:
            'A <span class="highlight-blue">single-page</span> sales dashboard built with Chart.js. Designed for tracking sales, purchases, and customer activity, it includes a styled sidebar for layout structure and future expansion.',
          price: "£399",
        },
        {
          name: "Worksphere",
          slug: "worksphere",
          image: "/Dashboard_Images/Worksphere.png",
          type: "MP / Vue / Chart.js",
          note: "You can use any login email and password — they don’t need to be real and will not be stored anywhere.",
          description:
            'A <span class="highlight-blue">multi-page</span> HR-style dashboard built with Chart.js, designed for workplace insights. Includes login/logout functionality, branded logos, and views for monitoring productivity, employee information, and team activity.',
          price: "£799",
        },
      ],
      isModalOpen: false,
      selectedDemo: "",
      selectedDashboardImage: "",
      selectedDescription: "",
      selectedPrice: "",
      selectedType: "",
      selectedSlug: "",
      selectedNote: "",
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
      this.selectedNote = demo.note;
      this.isModalOpen = true;
      // Add event listeners to prevent scrolling and not hide scrollbar - makes page jumpy
      window.addEventListener("wheel", this.preventScroll, { passive: false });
      window.addEventListener("touchmove", this.preventScroll, {
        passive: false,
      });
      window.addEventListener("keydown", this.preventKeyDown, {
        passive: false,
      });
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedDemo = null;

      // Remove event listeners to restore scrolling
      window.removeEventListener("wheel", this.preventScroll);
      window.removeEventListener("touchmove", this.preventScroll);
      window.removeEventListener("keydown", this.preventKeyDown);
    },
    // Prevent scrolling by using preventDefault
    preventScroll(event) {
      event.preventDefault();
    },
    preventKeyDown(event) {
      // Prevent arrow keys and space bar from scrolling
      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowUp" ||
        event.key === " "
      ) {
        event.preventDefault();
      }
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
  padding: 10px 15px;
  text-decoration: none;
  font-weight: 500;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #004f7c;
}

.latest-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -15px;
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

.info-icon {
  font-size: 20px;
  color: #006ba6;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

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

@media (max-width: 450px) {
  .button-container {
    flex-direction: column;
  }
  .button {
    box-sizing: border-box;
    text-align: center;
    width: 100%;
  }
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
