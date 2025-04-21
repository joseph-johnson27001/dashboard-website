<template>
  <div v-if="post" class="post-wrapper">
    <article class="post-container">
      <h1 class="post-title">{{ post.title }}</h1>

      <p class="post-description">{{ post.description }}</p>

      <img :src="post.image" :alt="post.title" class="post-image" />

      <div class="post-content">
        <p v-for="(line, i) in post.content.trim().split('\n')" :key="i">
          {{ line }}
        </p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  props: ["slug"],
  data() {
    return {
      post: null,
    };
  },
  async created() {
    try {
      const module = await import(`@/resources/posts/${this.slug}.js`);
      this.post = module.default;

      // Set document title
      document.title = `Template Dashboards - ${this.post.title}`;

      // Set meta description
      const metaDescriptionTag = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute("content", this.post.description);
      } else {
        const newMetaTag = document.createElement("meta");
        newMetaTag.setAttribute("name", "description");
        newMetaTag.setAttribute("content", this.post.description);
        document.head.appendChild(newMetaTag);
      }
    } catch (err) {
      console.error("Post not found:", this.slug);
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
  padding: 20px 30px;
  border: 1px solid #ddd;
}

.post-title {
  font-size: 22px;
  font-weight: 500;
  color: #006ba6;
  margin-bottom: 0px;
  margin-top: 10px;
  font-family: "Unica One", cursive;
  letter-spacing: -1px;
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
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 300;
  line-height: 1.4;
  font-family: "Assistant";
}

.not-found {
  text-align: center;
  padding: 60px 20px;
  font-size: 18px;
  color: #666;
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
