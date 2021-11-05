import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import Inicio from "../views/Pages/Inicio.vue";
import Perfil from "../views/Pages/Perfil.vue";
import Competencia from "../views/Pages/Competencia.vue";
import Insignia from "../views/Pages/Insignias.vue";
import Ranking from "../views/Pages/Ranking.vue";
import Firebase from "firebase/compat/app";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/inicio",
    name: "inicio",
    component: Inicio,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/perfil",
    name: "perfil",
    component: Perfil,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/competencia",
    name: "competencia",
    component: Competencia,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/insignia",
    name: "insignia",
    component: Insignia,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/ranking",
    name: "ranking",
    component: Ranking,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((ruta) => ruta.meta.requiresAuth)) {
    const user = Firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({
        name: "login",
      });
    }
  } else {
    next();
  }
});

export default router;
