<template>
  <nav>
    <div class="nav-container">
      <router-link to="/"><h2>Dashboard Templates</h2></router-link>
      <div class="nav-links">
        <router-link to="/demos">Demos</router-link>
        <router-link to="/purchase">Purchase</router-link>
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
  color: #006ba6;
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

h2 {
  font-family: "Unica One", cursive;
  color: #006ba6;
  margin: 0;
  font-weight: 500;
}

.nav-links {
  display: flex;
  gap: 1rem;
}
</style>
