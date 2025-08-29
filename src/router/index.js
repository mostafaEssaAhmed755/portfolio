import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import TestPage from "@/views/TestPage.vue";

const routes = [
  {
    path: "/portfolio/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    component: TestPage,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
