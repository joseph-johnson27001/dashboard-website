<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <h2>{{ title }}</h2>
      <div class="modal-buttons">
        <button @click="viewDemo">View Demo</button>
        <button @click="buyNow">Buy Now</button>
      </div>
      <button class="close-btn" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCard",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 25px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  text-align: center;
}

h2 {
  font-size: 24px;
  color: #006ba6;
  margin-bottom: 20px;
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

button {
  background-color: #006ba6;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #004f7c;
}

.close-btn {
  background-color: #ff6b6b;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 15px;
}

.close-btn:hover {
  background-color: #d94f4f;
}
</style>
