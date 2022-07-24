import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
			meta: { layout: 'primary-white'},
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
			meta: { layout: 'transparent'},
      component:  () => import(/*webpackChunkName: 'register'*/ "../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
			meta: { layout: 'transparent'},
      component:  () => import(/*webpackChunkName: 'login'*/ "../views/LoginView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
			meta: { layout: 'primary-white'},
      component:  () => import(/*webpackChunkName: 'profile'*/ "../views/ProfileView.vue"),
    },
  ],
});

export default router;
