import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import BookListView from "@/views/BookListView.vue";
import BookDetailsView from "@/views/BookDetailsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/books",
    name: "book-list",
    component: BookListView,
    children: [
      {
        path: "add",
        component: NotFoundView, //TODO: Change with actual form component
      },
    ],
  },
  {
    path: "/books/:id",
    name: "book-details",
    component: BookDetailsView,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
