import Vue from "vue";
import Router from "vue-router";
import home from "../components/home";
import portfolio from "../components/portfolio";
import contact from "../components/contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/portfolio",
      component: portfolio
    },
    {
      path: "/contact",
      component: contact
    }
  ]
});
