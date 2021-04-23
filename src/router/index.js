import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Books from "@/views/Books";
import Cart from "@/views/Cart";
import Posts from "@/views/Posts";
import Book from "@/views/Book";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
    children: []
  },
  {
    path: "/book/:bookId",
    name: "Book",
    component: Book,
    props: true
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
