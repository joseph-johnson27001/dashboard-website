<template>
  <nav>
    <div class="nav-container">
      <router-link to="/">
        <img src="/dashboard-logo.png" alt="Dashboard Logo" class="logo-img" />
      </router-link>
      <div class="nav-links">
        <router-link to="/how-it-works" active-class="active-link"
          >How It Works</router-link
        >
        <router-link to="/dashboards" active-class="active-link"
          >Dashboards</router-link
        >
        <!-- <router-link to="/single-page-dashboards" active-class="active-link"
          >Single Page</router-link
        >
        <router-link to="/multi-page-dashboards" active-class="active-link"
          >Multi-Page</router-link
        >
        <router-link to="/api-ready-dashboards" active-class="active-link"
          >API Ready</router-link
        > -->

        <router-link to="/contact" active-class="active-link"
          >Contact</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNavigation",
};
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(193, 191, 214, 0.5);
  height: 25px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
}

a {
  text-decoration: none;
  font-weight: 400;
  color: #006ba6;
}

.logo-img {
  height: 25px;
  width: auto;
}

.nav-links {
  display: flex;
  font-size: 15px;
  gap: 1rem;
  align-items: center;
}

.active-link {
  color: #006ba6;
  font-weight: 500;
  border-bottom: 2px solid #006ba6;
  padding-bottom: 3px;
  box-sizing: border-box;
}
</style>
