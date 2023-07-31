import { createRouter, createWebHistory } from "vue-router";
// import adddata from "../views/add-data.vue";
const adddata = () => import("../views/add-data.vue");
import home from "../views/home.vue";
import addpost from "../views/posts/add-post.vue";
import postdata from "../views/posts/post.vue";
import showdata from "../views/show-data.vue";
import updatedata from "../views/update-data.vue";
import showpost from "../views/posts/show-post.vue";
import updatepost from "../views/posts/update-post.vue";



const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/add-data",
    name: "adddata",
    component: adddata,
  },
  {
    path: "/update-data/:id",
    name: "updatedata",
    component: updatedata,
    props: true,
  },
  {
    path: "/show-data/:id",
    name: "showdata",
    component: showdata,
    props: true,
  },
  {
    path: "/post",
    name: "postdata",
    component: postdata,
  },
  {
    path: "/add-post",
    name: "addpost",
    component: addpost,
  },
  {
    path: "/update-post/:id",
    name: "updatepost",
    component: updatepost,
    props: true,
  },
  {
    path: "/show-post/:id",
    name: "showpost",
    component: showpost,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
