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
}

.post-container {
  max-width: 800px;
  padding: 20px 0;
  border-radius: 12px;
}

.post-title {
  font-size: 22px;
  font-weight: 500;
  color: #006ba6;
  margin-bottom: 15px;
  margin-top: 0px;
  font-family: "Unica One", cursive;
  letter-spacing: -1px;
}

.post-description {
  font-size: 18px;
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
}

.post-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 30px;
}

.post-content p {
  font-size: 16px;
  color: #333;
  line-height: 1.75;
  margin-bottom: 1.4em;
}

.not-found {
  text-align: center;
  padding: 60px 20px;
  font-size: 18px;
  color: #666;
}
</style>
