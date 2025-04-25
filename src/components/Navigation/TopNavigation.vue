<template>
  <nav>
    <div class="nav-container">
      <router-link to="/">
        <img
          src="/dashboard-logo.png"
          alt="Template Dashboards logo"
          class="logo-img"
        />
      </router-link>

      <button class="hamburger" @click="isMenuOpen = !isMenuOpen">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>

      <div class="nav-links" :class="{ 'show-menu': isMenuOpen }">
        <router-link
          to="/dashboards"
          active-class="active-link"
          @click="isMenuOpen = false"
        >
          Dashboards
        </router-link>
        <router-link
          to="/resources"
          active-class="active-link"
          @click="isMenuOpen = false"
        >
          Resources
        </router-link>
        <router-link
          to="/contact"
          active-class="active-link"
          @click="isMenuOpen = false"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNavigation",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    handleClickOutside(event) {
      if (this.isMenuOpen && !this.$el.contains(event.target)) {
        this.isMenuOpen = false;
      }
    },
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(193, 191, 214, 0.5);
  font-family: "Inter Tight";
  position: relative;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1800px;
}

.logo-img {
  height: 30px;
  width: auto;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  border: none;
  background: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #006ba6;
  transition: 0.3s;
}

.hamburger span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-links {
  display: flex;
  font-size: 15px;
  gap: 1rem;
  align-items: center;
}

a {
  text-decoration: none;
  font-weight: 400;
  color: #006ba6;
  padding-top: 5px;
}

.active-link {
  color: #006ba6;
  font-weight: 500;
  border-bottom: 2px solid #006ba6;
  padding-bottom: 3px;
  box-sizing: border-box;
}

/* Responsive styles */
@media (max-width: 450px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0px;
    background-color: #fff;
    border-bottom: 1px solid rgba(193, 191, 214, 0.5);
    padding: 10px;
    gap: 20px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    z-index: 10;
    width: 100%;
    box-sizing: border-box;
    text-align: flex-start;
  }

  .nav-links.show-menu {
    display: flex;
  }
}
</style>
