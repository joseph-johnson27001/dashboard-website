<template>
  <div class="post-wrapper">
    <article v-if="post" class="post-container">
      <h1 class="post-title">{{ post.title }}</h1>
      <p class="post-description">{{ post.description }}</p>
      <img :src="post.image" :alt="post.title" class="post-image" />
      <div class="post-content">
        <p v-for="(line, i) in post.content" :key="i">
          {{ line }}
        </p>
      </div>

      <div class="button-container">
        <a
          v-if="post.url"
          :href="post.url"
          class="button"
          target="_blank"
          rel="noopener"
          >View Dashboard</a
        >
        <router-link to="/dashboards" class="button"
          >View All Dashboards</router-link
        >
        <router-link to="/contact" class="button"
          >Request A Custom Dashboard</router-link
        >
      </div>
    </article>
  </div>
</template>

<script>
import { getPost } from "@/utils/postCache";

export default {
  name: "PostPage",
  props: {
    slug: String,
  },
  data() {
    return {
      post: null,
    };
  },
  async created() {
    let data = getPost(this.slug);
    if (!data) {
      try {
        const response = await fetch(`/resources/posts/${this.slug}.json`);
        data = await response.json();
      } catch (err) {
        console.error("Post not found:", this.slug);
        return;
      }
    }

    this.post = data;

    document.title = `Template Dashboards - ${this.post.title}`;
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute("content", this.post.description);
    } else {
      const newMetaTag = document.createElement("meta");
      newMetaTag.setAttribute("name", "description");
      newMetaTag.setAttribute("content", this.post.description);
      document.head.appendChild(newMetaTag);
    }
  },
};
</script>

<style scoped>
.post-wrapper {
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.post-container {
  max-width: 800px;
  border-radius: 8px;
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
}

.post-title {
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 10px;
  letter-spacing: -0.5px;
}

.post-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

p {
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
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
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

.not-found {
  text-align: center;
  padding: 60px 20px;
  font-size: 18px;
  color: #666;
}

@media (max-width: 520px) {
  .button-container {
    flex-direction: column;
    gap: 10px;
  }
  .button {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
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
