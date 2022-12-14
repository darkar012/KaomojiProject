import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/add",
      name: "addProduct",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/addProduct.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/galleryView.vue"),
    },
    {
      path: "/product/:productId",
      name: "product",
      //component: AboutUs
      component: () => import("../views/productView.vue"),
    },
    {
      path: "/login",
      name: "login",
      //component: AboutUs
      component: () => import("../views/login.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      //component: AboutUs
      component: () => import("../views/favView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      //component: AboutUs
      component: () => import("../views/userProfile.vue"),
    },
    {
      path: "/error",
      name: "404Error",
      //component: AboutUs
      component: () => import("../views/404.vue"),
    },
  ],
});

export default router;
