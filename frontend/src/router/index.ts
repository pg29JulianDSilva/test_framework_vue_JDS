import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LandingPage from "../views/LandingPage.vue";
import AboutPage from "../views/AboutPage.vue";
import Leaderboard from "../views/Leaderboard.vue";
import Contact from "../views/Contact.vue";
import LogIn from "../views/LogInPage.vue";

//The import and the routes where added for the new views

const routes: RouteRecordRaw[] = [
    { path: "/", name: "Landing", component: LandingPage },
    { path: "/about", name: "About", component: AboutPage },
    { path: "/Leaderboard", name: "Leaderboard", component: Leaderboard },
    { path: "/Contact", name: "Contact", component: Contact },
    { path: "/LogIn", name: "LogIn", component: LogIn }
];

//This is to create the history of the webpage itself it
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
