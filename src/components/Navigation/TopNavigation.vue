<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/demos">Demos</router-link>
    <router-link to="/purchase">Purchase</router-link>
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
  gap: 1rem;
  padding: 10px;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

nav a {
  text-decoration: none;
  color: blue;
  font-weight: 500;
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: red;
}
</style>
