import Vue from "vue";
import Router from "vue-router";
import TopList from "./views/TopList.vue";
import TopListItemDetail from "./views/TopListItemDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        TopList,
        TopListItemDetail
      }
    }
  ]
});