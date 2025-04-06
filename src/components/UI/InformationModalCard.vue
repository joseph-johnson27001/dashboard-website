<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <!-- Close Button -->
      <div class="close-btn-container" @click="closeModal">
        <span class="close-btn">&times;</span>
      </div>

      <!-- Title -->
      <h2 class="modal-title">Dashboard Info Guide</h2>

      <!-- Dynamic Content -->
      <div
        class="info-content"
        v-for="(section, index) in infoSections"
        :key="index"
      >
        <h3 class="info-heading">
          <span class="icon-container">
            <i :class="section.icon" class="icon"></i>
          </span>
          {{ section.title }}
        </h3>
        <ul v-if="section.type === 'list'">
          <li
            v-for="(item, idx) in section.content"
            :key="idx"
            v-html="item"
          ></li>
        </ul>
        <p v-else-if="section.type === 'paragraph'">
          {{ section.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationModalCard",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      infoSections: [
        {
          title: "Project Types",
          icon: "far fa-folder-open",
          type: "list",
          content: [
            "<strong>SP</strong> – Single Page Dashboard",
            "<strong>MP</strong> – Multi Page Dashboard",
            "<strong>AR</strong> – API Ready Dashboard",
          ],
        },
        {
          title: "Technologies Used",
          icon: "fas fa-puzzle-piece",
          type: "list",
          content: [
            "<strong>Vue 3</strong> – JavaScript framework for fast & reactive UIs",
            "<strong>ApexCharts</strong> – Advanced data visualization/charting library",
            "<strong>Chart.js</strong> – Lightweight chart library with solid defaults",
          ],
        },
        {
          title: "How to Use",
          icon: "far fa-lightbulb",
          type: "paragraph",
          content:
            "Each dashboard is structured and styled for easy integration. You can clone, customize, and connect your APIs or mock data directly into the charts and tables. For multi-page setups, routing is already configured.",
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

.modal {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: slideIn 0.3s ease-out;
  max-height: 80vh;
  overflow-y: auto;
}

.close-btn-container {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-btn-container:hover {
  background-color: #e0e0e0;
}

.close-btn {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}

.modal-title {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 0px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 10px;
  letter-spacing: -1px;
}

.info-content {
  margin-top: 20px;
}

.info-heading {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  font-family: "Unica One", cursive;
  color: rgb(24, 24, 24);
  letter-spacing: -1px;
  margin-bottom: 10px;
}

.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 4px;
}

.icon {
  font-size: 20px;
  color: #006ba6;
}

.info-content ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

.info-content li {
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 5px;
  list-style: none;
  margin-left: -15px;
}

.info-content p {
  font-size: 15px;
  line-height: 1.6;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
