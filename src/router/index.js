import { createRouter, createWebHistory } from "vue-router";
import adddata from "../views/add-data.vue";
import home from "../views/home.vue";
import updatedata from "../views/update-data.vue";
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
    path: "/update-data",
    name: "updatedata",
    component: updatedata,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;