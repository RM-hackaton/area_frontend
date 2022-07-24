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
      path: "/profile/start",
      name: "profile_start",
			meta: { layout: 'primary-white'},
      component:  () => import(/*webpackChunkName: 'profile'*/ "../views/ProfileStartView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
			meta: { layout: 'primary-white'},
      component:  () => import(/*webpackChunkName: 'profile'*/ "../views/ProfileView.vue"),
    },
    {
      path: "/profile/realty",
      name: "profile_realty",
			meta: { layout: 'primary-white'},
      component:  () => import(/*webpackChunkName: 'profile_realty'*/ "../views/ProfileRealtyView.vue"),
    },
    {
      path: "/profile/realty/item",
      name: "profile_realty_item",
			meta: { layout: 'primary-white'},
      component:  () => import(/*webpackChunkName: 'profile_realty_item'*/ "../views/ProfileRealtyItemView.vue"),
    },
    {
      path: "/realty",
      name: "realty",
			meta: { layout: 'white'},
      component:  () => import(/*webpackChunkName: 'realty'*/ "../views/RealtyView.vue"),
    },
    {
      path: "/realty/item",
      name: "realty_item",
			meta: { layout: 'white'},
      component:  () => import(/*webpackChunkName: 'realty_item'*/ "../views/RealtyItemView.vue"),
    },
    {
      path: "/realty/success",
      name: "realty_success",
			meta: { layout: 'primary-white'},
      component:  () => import(/*webpackchunkname: 'realty_success'*/ "../views/RealtySuccessView.vue"),
    },
    {
      path: "/market",
      name: "marketplace",
			meta: { layout: 'white'},
      component:  () => import(/*webpackchunkname: 'marketplace'*/ "../views/MarketplaceView.vue"),
    },
 ],
});

export default router;
