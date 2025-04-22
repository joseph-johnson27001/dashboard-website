<template>
  <div class="resources-page">
    <h1>Resources</h1>
    <p class="intro">
      Insights, tutorials, and tips on dashboards, frontend development, and
      design.
    </p>

    <div class="article-list">
      <router-link
        v-for="(article, index) in articles"
        :style="{ animationDelay: index * 0.08 + 's' }"
        :key="index"
        :to="`/resources/${article.slug}`"
        class="article-card"
      >
        <img :src="article.image" :alt="article.title" class="article-img" />
        <div class="article-content">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.excerpt }}</p>
          </div>
          <span class="read-more">Read more →</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResourcesPage",
  data() {
    return {
      articles: [
        {
          title: "Logistics Dashboard",
          slug: "logistics-dashboard",
          excerpt:
            "A multi-page, light-themed dashboard designed for a healthcare system. Built with ApexCharts, it's sleek, modern, and adaptable for a variety of use cases.",
          image: "/Dashboard_Images/logistics.png",
        },
        {
          title: "Sales Dashboard",
          slug: "sales-dashboard",
          excerpt:
            "A multi-page, light-themed dashboard designed for a healthcare system. Built with ApexCharts, it's sleek, modern, and adaptable for a variety of use cases.",
          image: "/Dashboard_Images/sales.png",
        },
        {
          title: "Finance Dashboard",
          slug: "finance-dashboard",
          excerpt:
            "A multi-page, light-themed dashboard designed for a healthcare system. Built with ApexCharts, it's sleek, modern, and adaptable for a variety of use cases.",
          image: "/Dashboard_Images/finance.png",
        },
        {
          title: "HR Dashboard",
          slug: "hr-dashboard",
          excerpt:
            "A multi-page, light-themed dashboard designed for a healthcare system. Built with ApexCharts, it's sleek, modern, and adaptable for a variety of use cases.",
          image: "/Dashboard_Images/hr-dashboard.png",
        },
        {
          title: "Worksphere Dashboard",
          slug: "worksphere-dashboard",
          excerpt:
            "A multi-page, light-themed dashboard designed for a healthcare system. Built with ApexCharts, it's sleek, modern, and adaptable for a variety of use cases.",
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
          title: "The Code Camp Dashboard",
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
    };
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
  border-radius: 4px;
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

@media (max-width: 1400px) {
  .article-list {
    grid-template-columns: 1fr;
    gap: 5px;
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
