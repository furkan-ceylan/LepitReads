import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import BookDetail from "../views/BookDetail.vue";
import Profile from "../views/Profile.vue";

import { projectAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/profile/user",
    name: "Profile",
    component: Profile,
    beforeEnter: requireAuth,
  },
  {
    path: "/bookdetail/:id",
    name: "BookDetail",
    component: BookDetail,
    props: true,
  },

  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: Profile,
  //   beforeEnter: requireAuth
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
