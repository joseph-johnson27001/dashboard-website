import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Demos from "../views/DemosPage.vue";
import Purchase from "../views/PurchasesPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/demos", component: Demos },
  { path: "/purchase", component: Purchase },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
