<template>
  <div class="how-it-works-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-text">
        <h1>How It Works</h1>
        <p>
          Learn about the different types of dashboards, the purchase process,
          and how I can create a custom solution tailored to your needs.
        </p>
      </div>
    </section>

    <!-- Dashboards Overview -->
    <section class="dashboards-overview">
      <div class="dashboard-types">
        <!-- Single Page Dashboards -->
        <div class="dashboard-type">
          <h3>Single Page Dashboards</h3>
          <p>
            A single page dashboard is a compact, fast-loading solution
            displaying all necessary data in one page. Perfect for projects that
            need speed and simplicity. The data will be stored inside the
            template's code (in the data object). You'll need to update or
            modify this data to suit your specific needs.
          </p>
        </div>

        <!-- Multi Page Dashboards -->
        <div class="dashboard-type">
          <h3>Multi Page Dashboards</h3>
          <p>
            Multi-page dashboards provide a more detailed and organized
            experience with separate pages for each section of the data. Great
            for large-scale applications that require deeper categorization. The
            data will also be stored in the template's code, similar to
            single-page dashboards. Additionally, you'll need to build your own
            API folder and link it to your dashboard.
          </p>
        </div>

        <!-- API Ready Dashboards -->
        <div class="dashboard-type">
          <h3>API Ready Dashboards</h3>
          <p>
            API-ready dashboards are designed to seamlessly integrate with your
            data sources. These templates come with no data pre-filled. Instead,
            they simulate an API call to a back-end folder with JSON data files.
            Once you purchase an API-ready dashboard, simply update the API
            calls to your data source and remove the data folder. It’s a
            straightforward setup to plug into your own data system.
          </p>
        </div>
      </div>
    </section>

    <!-- Purchase & Download Process -->
    <section class="purchase-process">
      <h3>Purchase & Download Process</h3>
      <p>
        After purchasing a dashboard, you will receive a download link. This
        link will expire within 24 hours, so be sure to download your dashboard
        during that time. Inside the package, you will find all the necessary
        files to get started.
      </p>
      <p>
        - For Single and Multi-Page Dashboards: The data will be inside the
        template code (in the data object). You can easily modify it to suit
        your project’s needs.
      </p>
      <p>
        - For API Ready Dashboards: The templates will not have any pre-filled
        data. They will simulate an API call to a back-end data folder with JSON
        files. To integrate with your own data, just update the API calls and
        remove the data folder.
      </p>
    </section>

    <!-- Custom Work & Contracting -->
    <section class="custom-work">
      <h3>Custom Work & Contracting</h3>
      <p>
        If you need a custom dashboard tailored to your project’s unique
        requirements, I am available for hire. Whether you want me to customize
        an existing template or work on a full project, I can help. I offer
        flexible contracting options including day rates and full-time work.
      </p>
      <a href="/hire" class="hire-button">Hire Me</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "HowItWorksPage",
};
</script>

<style scoped>
.how-it-works-page {
  opacity: 0;
  animation: fadeIn 0.5s forwards;
}

.hero h1 {
  font-family: "Unica One", cursive;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #006ba6;
  margin-top: 10px;
}

p {
  font-size: 15px;
  font-weight: 300;
}

/* Dashboards Overview */
.dashboard-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.dashboard-type h3 {
  font-family: "Unica One", cursive;
  color: #006ba6;
  margin-bottom: 15px;
  font-size: 22px;
}

.dashboard-type p {
  font-size: 16px;
  font-weight: 300;
}

/* Purchase Process Section */
.purchase-process {
  background: #f7f7f7;
  margin-bottom: 30px;
}

.purchase-process h3 {
  font-family: "Unica One", cursive;
  color: #006ba6;
  font-size: 22px;
  margin-bottom: 20px;
}

.purchase-process p {
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 15px;
}

.custom-work {
  margin-top: 30px;
}

.custom-work h3 {
  font-family: "Unica One", cursive;
  font-size: 22px;
  color: #006ba6;
  margin-bottom: 20px;
  margin-top: 20px;
}

.custom-work p {
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 25px;
}

.hire-button {
  background-color: #006ba6;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.hire-button:hover {
  background-color: #004f7c;
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
