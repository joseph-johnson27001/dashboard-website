<template>
  <div v-if="visible" class="ToastAlert" :class="type" @click="closeToastAlert">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "ToastAlert",
  data() {
    return {
      visible: false,
      message: "",
      type: "",
    };
  },
  methods: {
    show(message, type = "success") {
      this.message = message;
      this.type = type;
      this.visible = true;
      setTimeout(this.closeToastAlert, 5000);
    },
    closeToastAlert() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.ToastAlert {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 400px;
  width: 100%;
  padding: 15px;
  background-color: whitesmoke;
  color: #444;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  border: 1px solid;
  box-sizing: border-box;
}
.ToastAlert p {
  margin: 0;
}

.ToastAlert.success {
  border-color: #4caf50;
}

.ToastAlert.error {
  border-color: #f44336;
}
</style>
