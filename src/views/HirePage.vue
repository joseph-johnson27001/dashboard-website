<template>
  <div class="hire-page">
    <section class="hero-section">
      <h1>Get a Custom Dashboard Built</h1>
      <p>
        I build high-quality Vue.js dashboards tailored to your needs—whether
        from scratch, refreshing an existing one, or integrating with APIs. I
        ensure fast, responsive, and API-ready solutions. My services include
        custom dashboard development, UI/UX improvements, and seamless backend
        integration. Pricing is simple: £500 per day, with most projects
        completed within 1-5 days. Let’s bring your dashboard to life!
      </p>
    </section>

    <section class="contact-form">
      <form @submit.prevent="submitForm">
        <label>Name</label>
        <input type="text" v-model="form.name" required />

        <label>Email</label>
        <input type="email" v-model="form.email" required />

        <label>Company (Optional)</label>
        <input type="text" v-model="form.company" />

        <label>Dashboard Type</label>
        <select v-model="form.dashboardType" required>
          <option value="Single Page Dashboards">Single Page Dashboards</option>
          <option value="Multi Page Dashboards">Multi Page Dashboards</option>
          <option value="API Ready Dashboards">API Ready Dashboards</option>
          <option value="Custom Build">Custom Build</option>
        </select>

        <label>Project Details</label>
        <textarea v-model="form.details" required></textarea>

        <button type="submit">Submit Inquiry</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "HirePage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        company: "",
        details: "",
        dashboardType: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(
        `Inquiry submitted for: ${this.form.dashboardType}. I'll get back to you soon!`
      );
    },
  },
};
</script>

<style scoped>
.hire-page {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.hero-section h1 {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 10px;
  letter-spacing: -1px;
}

p {
  margin-top: 5px;
  font-size: 15px;
  font-weight: 300;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 15px;
  font-weight: 300;
  margin-top: 10px;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  box-sizing: border-box;
  outline: none;
}

option {
  font-family: "Inter Tight", sans-serif;
  color: #444;
  font-size: 15px;
}

textarea {
  height: 300px;
}

button {
  margin-top: 15px;
  padding: 10px;
  background: #006ba6;
  color: white;
  border: none;
  cursor: pointer;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    /* transform: translateY(10px); */
  }
  to {
    opacity: 1;
    /* transform: translateY(0); */
  }
}
</style>
