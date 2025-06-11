<template>
  <div class="services-page">
    <div class="hero-section">
      <div class="hero-header">
        <h1>Services</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-page {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.hero-section {
  margin-bottom: 20px;
}

.hero-section h1 {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 0px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 0px;
  letter-spacing: -1px;
}

.hero-section p {
  font-size: 17px;
  margin-top: 5px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 300;
  line-height: 1.4;
  font-family: "Assistant";
}

.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
