import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import "./style.css";

const router = createRouter({
  history: createWebHistory("/portfolio/"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

const app = createApp(App);
app.use(router);
app.mount("#app");
