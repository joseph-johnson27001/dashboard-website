<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <!-- Close Button -->
      <div class="close-btn-container" @click="closeModal">
        <span class="close-btn">&times;</span>
      </div>

      <!-- Title -->
      <div class="top-container">
        <h2 class="modal-title">{{ title }}</h2>
        <!-- Price Area -->
        <div v-if="price" class="price-tag">
          {{ price }}
        </div>
      </div>

      <!-- Description -->
      <p v-html="description" class="modal-description"></p>

      <!-- Note Section -->
      <p class="modal-note" v-if="note">* {{ note }}</p>

      <!-- Dashboard Image -->
      <div class="dashboard-image-container">
        <img :src="image" alt="Dashboard Image" class="dashboard-image" />
      </div>

      <div class="bottom-container">
        <!-- Type Tag -->
        <div class="tag">{{ type }}</div>

        <!-- Modal Buttons -->
        <div class="modal-buttons">
          <!-- View Demo Button -->
          <a
            :href="`https://${slug}.templatedashboards.com`"
            class="button"
            @click="viewDemo"
            target="_blank"
            rel="noopener"
          >
            View Demo
          </a>

          <!-- Buy Now Button (disabled) -->
          <router-link
            to="/contact"
            class="button"
            @click="buyNow"
            v-bind:disabled="true"
          >
            Purchase
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardModalCard",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    note: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
      default: "",
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    viewDemo() {
      this.$emit("view-demo");
      this.closeModal();
    },
    buyNow() {
      this.$emit("buy-now");
      this.closeModal();
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
  padding: 20px 30px;
  margin: 10px 10px;
  border-radius: 10px;
  max-width: 90%;
  overflow-y: scroll;
  max-height: 90vh;
  max-width: 700px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: slideIn 0.3s ease-out;
  z-index: 1001;
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

.top-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 0;
}

.bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
}

.modal-title {
  font-family: "Unica One", cursive;
  font-size: 24px;
  font-weight: 400;
  color: #006ba6;
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: -1px;
}

.modal-note {
  font-size: 15px;
  font-style: italic;
  color: #555;
  margin-top: -5px;
  margin-bottom: 5px;
  font-family: "Assistant";
}

/* BRING THE PRICE TAG BACK FOR PHASE 2 */

.price-tag {
  font-size: 20px;
  font-weight: 500;
  color: #006ba6;
  display: none;
}

.modal-description {
  font-size: 17px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 300;
  line-height: 1.4;
  font-family: "Assistant";
}

.dashboard-image-container {
  text-align: center;
}

.dashboard-image {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.tag {
  background-color: #f0f0f0;
  font-family: sans-serif;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  white-space: nowrap;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
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

.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

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

@media (max-width: 500px) {
  .modal-buttons {
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  .bottom-container {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    box-sizing: border-box;
  }
  .button {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
}

/* Media query for fixing  */

@media (min-width: 501px) and (max-width: 1024px) {
  .dashboard-image {
    object-fit: contain;
  }
  .modal-overlay {
    align-items: flex-start;
  }
  .modal {
    margin-top: 20px;
    margin-bottom: 0px;
  }
}
</style>
