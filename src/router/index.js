import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Single from "../views/SinglePage.vue";
import Multi from "../views/MultiPage.vue";
import Hire from "..//views/HirePage.vue";
import API from "../views/APIReadyPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/single", component: Single },
  { path: "/multi", component: Multi },
  { path: "/hire", component: Hire },
  { path: "/api-ready", component: API },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
