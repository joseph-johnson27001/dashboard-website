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
        :key="index"
        :to="`/resources/${article.slug}`"
        class="article-card"
      >
        <img :src="article.image" :alt="article.title" class="article-img" />
        <div class="article-content">
          <h2>{{ article.title }}</h2>
          <p>{{ article.excerpt }}</p>
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
          title: "What Is a Dashboard?",
          slug: "what-is-a-dashboard",
          excerpt:
            "Dashboards are visual interfaces that help users understand data at a glance. They provide quick insights, track key performance indicators, and support better decision-making in business, tech, and analytics.",
          image: "/Dashboard_Images/Code_Camp.png",
        },
        {
          title: "Single-Page vs Multi-Page Dashboards",
          slug: "single-vs-multi-page-dashboards",
          excerpt:
            "Should your dashboard fit on a single page, or be split into multiple views? Learn how to decide based on the complexity of your data, user roles, and project requirements.",
          image: "/Dashboard_Images/Finance.png",
        },
        {
          title: "Top Frontend Libraries for Dashboards",
          slug: "top-frontend-libraries-for-dashboards",
          excerpt:
            "Choosing the right frontend stack matters. We break down popular libraries like Vue, React, Chart.js, and ApexCharts to help you pick the best tools for your next dashboard project.",
          image: "/Dashboard_Images/Logistics.png",
        },
        {
          title: "What Is a Dashboard?",
          slug: "what-is-a-dashboard",
          excerpt:
            "Dashboards are visual interfaces that help users understand data at a glance. They provide quick insights, track key performance indicators, and support better decision-making in business, tech, and analytics.",
          image: "/Dashboard_Images/Code_Camp.png",
        },
        {
          title: "Single-Page vs Multi-Page Dashboards",
          slug: "single-vs-multi-page-dashboards",
          excerpt:
            "Should your dashboard fit on a single page, or be split into multiple views? Learn how to decide based on the complexity of your data, user roles, and project requirements.",
          image: "/Dashboard_Images/Finance.png",
        },
        {
          title: "Top Frontend Libraries for Dashboards",
          slug: "top-frontend-libraries-for-dashboards",
          excerpt:
            "Choosing the right frontend stack matters. We break down popular libraries like Vue, React, Chart.js, and ApexCharts to help you pick the best tools for your next dashboard project.",
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
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
}

.article-img {
  width: 320px;
  height: 240px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 6px;
}

.article-content h2 {
  font-family: "Unica One", cursive;
  font-size: 22px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 10px;
  letter-spacing: -1px;
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
  margin-top: 8px;
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
  }

  .article-img {
    width: 100%;
    height: auto;
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
