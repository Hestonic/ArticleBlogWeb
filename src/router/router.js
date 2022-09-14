import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ArticleIdPage from "@/pages/ArticleIdPage";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/article/:id',
        component: ArticleIdPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;