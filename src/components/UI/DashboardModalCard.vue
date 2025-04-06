<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <!-- Close Button -->
      <div class="close-btn-container" @click="closeModal">
        <span class="close-btn">&times;</span>
      </div>

      <!-- Title Section -->
      <h2 class="modal-title">{{ title }}</h2>
      <!-- Display Dashboard Image -->
      <div class="dashboard-image-container">
        <img :src="image" alt="Dashboard Image" class="dashboard-image" />
      </div>

      <!-- Modal Buttons -->
      <div class="modal-buttons">
        <button @click="viewDemo" class="demo-button">View Demo</button>
        <button @click="buyNow" disabled class="demo-button disabled">
          Buy Now
        </button>
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
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: slideIn 0.3s ease-out;
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

/* Modal Title */
.modal-title {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 0;
  letter-spacing: -1px;
}

/* Dashboard Image */
.dashboard-image-container {
  text-align: center;
}

.dashboard-image {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

/* Modal Buttons */
.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
}

.demo-button {
  background-color: #006ba6;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
}

.demo-button:hover {
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
</style>
