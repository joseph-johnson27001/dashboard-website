import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Single from "../views/SinglePage.vue";
import Multi from "../views/MultiPage.vue";
import Contact from "../views/ContactPage.vue";
import HowItWorks from "../views/HowItWorksPage.vue";
import API from "../views/APIReadyPage.vue";
import Dashboards from "../views/DashboardsPage.vue";
import DashboardViewer from "@/views/DashboardViewer.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "Prebuilt Frontend Dashboard Templates for Web Apps" },
  },
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
  { path: "/contact", component: Contact, meta: { title: "Contact" } },
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
  {
    path: "/dashboard-demo/:slug",
    name: "DashboardViewer",
    component: DashboardViewer,
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
  let pageTitle = to.meta.title;

  if (to.name === "DashboardViewer") {
    const slug = to.params.slug;
    const dashboardTitles = {
      healthcare: "Healthcare Dashboard",
      logistics: "Logistics Dashboard",
      "code-camp": "Code Camp Dashboard",
      finance: "Finance Dashboard",
      "hr-dashboard": "HR Dashboard",
      sales: "Sales Dashboard",
      worksphere: "Worksphere Dashboard",
    };
    pageTitle = dashboardTitles[slug] || "Dashboard Demo";
  }

  // Reset favicon manually (needed for iframe views)
  const favicon = document.querySelector("link[rel='icon']");
  if (favicon) {
    favicon.href = "/dashboard-logo.png";
  } else {
    const newFavicon = document.createElement("link");
    newFavicon.rel = "icon";
    newFavicon.href = "dashboard-logo.png";
    document.head.appendChild(newFavicon);
  }

  document.title = `Template Dashboards - ${pageTitle}`;
  next();
});
export default router;
