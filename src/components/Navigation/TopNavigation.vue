<template>
  <nav>
    <div class="nav-container">
      <router-link to="/">
        <i class="fas fa-chart-bar logo-icon"></i>
      </router-link>
      <div class="nav-links">
        <router-link to="/single-page-dashboards" active-class="active-link"
          >Single Page</router-link
        >
        <router-link to="/multi-page-dashboards" active-class="active-link"
          >Multi-Page</router-link
        >
        <router-link to="/api-ready-dashboards" active-class="active-link"
          >API Ready</router-link
        >
        <router-link to="/hire" active-class="active-link">Hire</router-link>
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

.logo-icon {
  font-size: 18px;
  color: #006ba6;
}

.nav-links {
  display: flex;
  font-size: 15px;
  gap: 1rem;
}

.active-link {
  color: #006ba6;
  font-weight: 500;
  border-bottom: 2px solid #006ba6;
  padding-bottom: 3px;
  box-sizing: border-box;
}
</style>
