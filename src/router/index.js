import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Contact from "../views/ContactPage.vue";
import Resources from "../views/ResourcesPage.vue";
import PostPage from "../views/PostPage.vue";
import Dashboards from "../views/DashboardsPage.vue";
import ServicesPage from "@/views/ServicesPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Prebuilt Frontend Dashboard Templates for Web Apps",
      description:
        "Explore prebuilt, fully responsive dashboard templates for web applications. Get customizable and ready-to-use solutions for your data visualization and business needs.",
    },
  },
  {
    path: "/resources",
    component: Resources,
    meta: {
      title: "Resources",
      description:
        "Explore guides, comparisons, and tips on dashboards, data visualization, and front-end best practices. Fresh insights for devs and decision-makers.",
    },
  },
  {
    path: "/resources/:slug",
    name: "post",
    component: PostPage,
    props: true,
    meta: {
      title: "Resources",
      description:
        "Explore guides, comparisons, and tips on dashboards, data visualization, and front-end best practices. Fresh insights for devs and decision-makers.",
    },
  },
  {
    path: "/contact",
    component: Contact,
    meta: {
      title: "Contact",
      description:
        "Contact Template Dashboards for support, inquiries, or to learn more about our prebuilt dashboard templates. We're here to help!",
    },
  },
  {
    path: "/services",
    component: ServicesPage,
    meta: {
      title: "Services",
      description:
        "Learn how Template Dashboards can help you quickly implement customizable dashboards for your web application.",
    },
  },
  {
    path: "/dashboards",
    component: Dashboards,
    meta: {
      title: "Dashboards",
      description:
        "Browse a wide range of professional dashboard templates for your business or project. Customize and implement prebuilt dashboards for your web app with ease.",
    },
  },
  {
    path: "/:catchAll(.*)", // catch-all route for undefined paths
    redirect: "/", // redirect to home page
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
  let pageDescription =
    to.meta.description || "Default description for Template Dashboards page.";

  // Set meta description dynamically
  const metaDescriptionTag = document.querySelector('meta[name="description"]');
  if (metaDescriptionTag) {
    metaDescriptionTag.setAttribute("content", pageDescription);
  } else {
    const newMetaDescriptionTag = document.createElement("meta");
    newMetaDescriptionTag.setAttribute("name", "description");
    newMetaDescriptionTag.setAttribute("content", pageDescription);
    document.head.appendChild(newMetaDescriptionTag);
  }

  // Reset favicon manually
  const favicon = document.querySelector("link[rel='icon']");
  if (favicon) {
    favicon.href = "/dashboard-logo.png";
  } else {
    const newFavicon = document.createElement("link");
    newFavicon.rel = "icon";
    newFavicon.href = "dashboard-logo.png";
    document.head.appendChild(newFavicon);
  }

  // Set title dynamically
  document.title = `Template Dashboards - ${pageTitle}`;
  next();
});

export default router;
