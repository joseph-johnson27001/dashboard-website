import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Single from "../views/SinglePage.vue";
import Multi from "../views/MultiPage.vue";
import Hire from "../views/HirePage.vue";
import HowItWorks from "../views/HowItWorksPage.vue";
import API from "../views/APIReadyPage.vue";
import Dashboards from "../views/DashboardsPage.vue";

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
  {
    path: "/how-it-works",
    component: HowItWorks,
    meta: { title: "How It Works" },
  },
  {
    path: "/dashboards",
    component: Dashboards,
    meta: { title: "Dashboards" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `Template Dashboards - ${to.meta.title || "Loading..."}`;
  next();
});

export default router;
