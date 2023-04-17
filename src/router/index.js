import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Social from "@/views/Social.vue";

const routes = [
    {
        path:"/",
        Name:"Home",
        component: Home,
    },
    {
        path: "/About",
        Name:"About",
        component:About,
    },
    {
        path:"/Social",
        Name:"Social",
        component:Social,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
