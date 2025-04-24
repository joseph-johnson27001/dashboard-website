<template>
  <div class="resources-page">
    <h1>Resources</h1>
    <p class="intro">
      Insights, tutorials, and tips on dashboards, frontend development, and
      design.
    </p>

    <div class="article-list">
      <router-link
        v-for="(article, index) in paginatedArticles"
        :key="index"
        :to="`/resources/${article.slug}`"
        class="article-card"
        @mouseover="preloadPost(article.slug)"
        :style="{ animationDelay: index * 0.08 + 's' }"
      >
        <img
          :src="article.image"
          :alt="article.title"
          class="article-img"
          loading="lazy"
        />
        <div class="article-content">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.excerpt }}</p>
          </div>
          <span class="read-more">Read more →</span>
        </div>
      </router-link>
    </div>

    <!-- Pagination buttons -->
    <div v-if="totalPages > 1" class="pagination">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: currentPage === page }"
        class="page-button"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
import { preloadPost } from "@/utils/postCache";

export default {
  name: "ResourcesPage",
  data() {
    return {
      allArticles: [
        {
          title: "Logistics Dashboard",
          slug: "logistics-dashboard",
          excerpt:
            "A single-page logistics dashboard built with Vue and Chart.js. Track orders, shipments, and delivery performance with real-time visual insights.",
          image: "/Dashboard_Images/logistics.png",
        },
        {
          title: "Sales Dashboard",
          slug: "sales-dashboard",
          excerpt:
            "A single-page sales dashboard built with Vue and Chart.js. Track KPIs, orders, and product performance with responsive tables and dynamic charts.",
          image: "/Dashboard_Images/sales.png",
        },
        {
          title: "Finance Dashboard",
          slug: "finance-dashboard",
          excerpt:
            "A clean, single-page financial dashboard built with Vue and ApexCharts. Includes KPIs and interactive graphs — perfect for finance teams or product inspiration.",
          image: "/Dashboard_Images/finance.png",
        },
        {
          title: "HR Dashboard",
          slug: "hr-dashboard",
          excerpt:
            "A multi-page, API-ready HR dashboard built with Vue and Chart.js. Designed for quick integration — just swap the mock data calls with your real endpoints.",
          image: "/Dashboard_Images/hr-dashboard.png",
        },
        {
          title: "Worksphere Dashboard",
          slug: "worksphere-dashboard",
          excerpt:
            "A multi-page HR dashboard built with Vue and Chart.js. Includes login/logout flow, team performance views, and space for your branding.",
          image: "/Dashboard_Images/Worksphere.png",
        },
        {
          title: "Healthcare Dashboard",
          slug: "healthcare-dashboard",
          excerpt:
            "A multi-page, light-themed dashboard designed for a healthcare system. Built with ApexCharts, it's sleek, modern, and adaptable for a variety of use cases.",
          image: "/Dashboard_Images/Healthcare.png",
        },
        {
          title: "Code Camp Dashboard",
          slug: "code-camp-dashboard",
          excerpt:
            "A dark-themed, single-page dashboard designed for online learning platforms. Built with ApexCharts, it's sleek, modern, and adaptable for a variety of use cases.",
          image: "/Dashboard_Images/Code_Camp.png",
        },
        {
          title: "Introducing Template Dashboards",
          slug: "introducing-template-dashboards",
          excerpt:
            "Get to know Template Dashboards — a growing collection of prebuilt, responsive dashboard templates for modern web apps. Learn what we offer, who it's for, and how to get started.",
          image: "/Dashboard_Images/Logistics.png",
        },
      ],
      currentPage: 1,
      itemsPerPage: 6,
    };
  },
  computed: {
    // Paginate the articles based on current page and items per page
    paginatedArticles() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.allArticles.slice(start, end);
    },
    // Calculate the total number of pages based on the total articles
    totalPages() {
      return Math.ceil(this.allArticles.length / this.itemsPerPage);
    },
  },
  methods: {
    preloadPost(slug) {
      preloadPost(slug);
    },
    changePage(page) {
      if (this.currentPage !== page) {
        this.currentPage = page;
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>

<style scoped>
.resources-page {
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

.intro {
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 300;
  line-height: 1.4;
  font-family: "Assistant";
}

.article-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.article-card {
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  border: 1px solid #ddd;
  padding: 15px;
  transition: box-shadow 0.2s;
  border-radius: 8px;
  background-color: #fff;
  transition: background-color 0.2s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  opacity: 0;
  animation: fadeIn 0.8s forwards;
}

.article-img {
  width: 320px;
  height: 240px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.article-content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.article-content h2 {
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 10px;
  letter-spacing: -0.5px;
}

.article-content p {
  font-size: 17px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 300;
  line-height: 1.4;
  font-family: "Assistant";
}

.read-more {
  align-self: flex-end;
  font-size: 13px;
  color: #006ba6;
}

/* Pagination styles */
.pagination {
  text-align: right;
  margin-top: 20px;
}

.page-button {
  background-color: #006ba6;
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.page-button.active {
  background-color: #004d73;
}

.page-button:hover {
  background-color: #005c8f;
}

@media (max-width: 1400px) {
  .article-list {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
}

@media (max-width: 900px) {
  .article-img {
    width: 220px;
    height: 180px;
  }
}

@media (max-width: 650px) {
  .article-card {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }

  a {
    border-radius: 0;
  }

  .article-img {
    width: 100%;
    height: auto;
    border-radius: 0;
  }

  .article-content {
    padding: 10px;
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
