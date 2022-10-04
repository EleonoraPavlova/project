import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import NewsView from "../views/NewsView.vue";
import BlogView from "../views/BlogView.vue";
import VacanciesView from "../views/VacanciesView.vue"
import GalleryView from "../views/GalleryView.vue"
import DataBaseView from "../views/DataBaseView.vue"
import CVconstructorView from "../views/CVconstructorView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
  },
  {
    path: "/vacancies",
    name: "vacancies",
    component: VacanciesView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/database",
    name: "database",
    component: DataBaseView,
  },
  {
    path: "/cvconstructor",
    name: "cvconstructor",
    component: CVconstructorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
