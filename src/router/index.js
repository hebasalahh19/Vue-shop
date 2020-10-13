import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue"
import Profile from "../views/Profile.vue"
import CheckOut from "../views/CheckOut.vue"
import {fb} from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: { requiresAuth: true },
    children:[
      {
        path: "overview",
        name: "overview",
        component: Overview
      },
      {
        path: "products",
        name: "products",
        component: Products
      },
      {
        path: "orders",
        name: "orders",
        component: Orders
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      }

    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/checkout",
    name: "CheckOut",
    component: CheckOut
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
router.beforeEach((to, from, next) => {
  const currentUser = fb.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next('/');
  } 
  else if (requiresAuth && currentUser) {
    next();
  }
  else {
    next();
   }

})
