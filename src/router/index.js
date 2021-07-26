import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/support",
    name: "Support",
    // name: "Statistical",
    component: () => import("../views/support/Support.vue"),
  },

  //account view
  {
    path: "/statistical",
    name: "Statistical",
    component: () => import("../views/manager/Statistical.vue"),
  },
  {
    path: "/manager/order",
    name: "ManagerOrder",
    component: () => import("../views/manager/ManagerOrder.vue"),
  },
  {
    path: "/manager/order",
    name: "ManagerProduct",
    component: () => import("../views/manager/ManagerProduct.vue"),
  },
  {
    path: "/upload",
    name: "UploadProduct",
    component: () => import("../views/upload/UploadProduct.vue"),
  },
  {
    path: "/account/sign-in",
    name: "SignIn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/account/Login.vue"),
  },
  {
    path: "/account/sign-up",
    name: "SignUp",
    component: () => import("../views/account/Register.vue"),
  },
  {
    path: "/account/reset-password",
    name: "Reset",
    component: () => import("../views/account/Reset.vue"),
  },
  {
    path: "/account/forgot-password/step1",
    name: "Forgot",
    component: () => import("../views/account/Forgot.vue"),
  },
  {
    path: "/account/forgot-password/step2",
    name: "ForgetStep2",
    component: () => import("../views/account/ForgotStep2.vue"),
  },
  {
    path: "/account/forgot-password/step3",
    name: "ForgetStep3",
    component: () => import("../views/account/ForgotStep3.vue"),
  },

  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/cart/CartPage.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/home/Products.vue"),
  },
  {
    path: "/products/:idProduct",
    component: () => import("../views/details/ProductDetail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
