import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Single from "../views/SinglePage.vue";
import Multi from "../views/MultiPage.vue";
import Hire from "../views/HirePage.vue";
import API from "../views/APIReadyPage.vue";

const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/single-page-dashboards",
    component: Single,
    meta: { title: "Single Page Dashboards" },
  },
  {
    path: "/multi-page-dashboards",
    component: Multi,
    meta: { title: "Multi Page Dashboards" },
  },
  { path: "/hire", component: Hire, meta: { title: "Hire" } },
  {
    path: "/api-ready-dashboards",
    component: API,
    meta: { title: "API Ready Dashboards" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Template Dashboards - ${to.meta.title || "Loading..."}`;
  next();
});

export default router;
