<template>
  <div class="contact-page">
    <section class="hero-section">
      <h1>Contact Us</h1>
      <p>
        Whether you're interested in purchasing a pre-made dashboard or need a
        custom dashboard built to your specific requirements, we’re here to
        help. Our pre-made dashboards are ready for purchase, while custom
        builds can be tailored to your needs, including UI/UX improvements and
        seamless backend integration. Our pricing is simple: £500 per day, with
        most projects completed within 1-5 days. Get in touch to discuss how we
        can bring your dashboard vision to life!
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
          <option disabled value="">Please select</option>
          <option value="Single Page Dashboards">Single Page Dashboards</option>
          <option value="Multi Page Dashboards">Multi Page Dashboards</option>
          <option value="API Ready Dashboards">API Ready Dashboards</option>
          <option value="Custom Build">Custom Build</option>
        </select>

        <label>Project Details</label>
        <textarea v-model="form.details" required></textarea>

        <button type="submit" class="button">Submit Inquiry</button>
      </form>
    </section>

    <!-- ToastAlert Component -->
    <ToastAlert ref="ToastAlert" />
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import ToastAlert from "../components/Alerts/ToastAlert.vue";

export default {
  name: "ContactPage",
  components: {
    ToastAlert,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        company: "",
        dashboardType: "",
        details: "",
      },
    };
  },
  methods: {
    submitForm() {
      const serviceID = "service_1atgpf8";
      const templateID = "template_00lp41j";
      const publicKey = "PqLTs_mca__hM55qf";

      const templateParams = {
        name: this.form.name,
        email: this.form.email,
        company: this.form.company || "N/A",
        dashboardType: this.form.dashboardType,
        details: this.form.details,
      };

      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
          this.$refs.ToastAlert.show(
            "✅ Your inquiry has been sent! We'll be in touch soon."
          );
          this.form = {
            name: "",
            email: "",
            company: "",
            dashboardType: "",
            details: "",
          };
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          this.$refs.ToastAlert.show(
            "❌ Something went wrong. Please try again later.",
            "error"
          );
        });
    },
  },
};
</script>

<style scoped>
.contact-page {
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
  font-size: 17px;
  margin-top: 5px;
  color: #222;
  font-weight: 300;
  font-family: "Assistant";
  line-height: 1.5;
}

form {
  font-family: "Assistant";
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
  font-family: "Assistant";
  color: #222;
  font-size: 15px;
}

textarea {
  height: 300px;
}

.button {
  font-family: "Inter Tight", sans-serif;
  background-color: #006ba6;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 500;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-top: 15px;
  border: none;
  max-width: 200px;
  font-size: 16px;
  margin-left: auto;
  cursor: pointer;
}

.button:hover {
  background-color: #004f7c;
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
