import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlogPage from "../components/BlogPage.vue";
import EntriesView from "../views/EntriesView.vue";
import CommanderView from "../views/CommanderView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/commander",
    name: "commander",
    component: CommanderView,
    children: [
      {
        path: "edit/:blogId",
        component: BlogPage,
        props: true,
        meta: {
          showModal: true,
        },
      },
      {
        path: "create",
        component: BlogPage,
        props: true,
        meta: {
          showModal: true,
        },
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/entries",
    name: "entries",
    component: EntriesView,
    children: [
      {
        path: ":blogId",
        component: BlogPage,
        props: true,
        meta: {
          showModal: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
