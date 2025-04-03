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
  background: #2e3348;
  border-bottom: 1px solid rgba(193, 191, 214, 0.5);
  color: #c1bfd6;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
}

h2 {
  font-family: "Unica One", cursive;
  color: #c1bfd6;
  margin: 0;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  font-weight: 500;
  color: #c1bfd6;
}
</style>
