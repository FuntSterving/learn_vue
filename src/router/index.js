import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/table",
      name: "table",
      component: () => import("../views/TablePage.vue"),
    },
    {
      path: "/cards",
      name: "cards",
      component: () => import("../views/CardPage.vue"),
    },

    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/ContactsPage.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CartPage.vue"),
    },
    {
      path: "/:pathMach(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundPage.vue"),
    },
    {
      path: "/car/:id",
      name: "car",
      component: () => import("../views/CarIdPage.vue"),
    },
  ],
});

export default router;
