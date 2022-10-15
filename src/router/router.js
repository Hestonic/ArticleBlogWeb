import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ArticleIdPage from "@/pages/ArticleIdPage";
import store from '@/store'
import WriteArticle from "@/pages/WriteArticle";
import MyArticles from "@/pages/MyArticles";
import UpdateArticle from "@/pages/UpdateArticle";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated']) {
                return next({
                    name: 'main'
                })
            }

            next()
        }
    },
    {
        path: '/register',
        component: Register,
        beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated']) {
                return next({
                    name: 'main'
                })
            }

            next()
        }
    },
    {
        path: '/article/:id',
        component: ArticleIdPage
    },
    {
        path: '/write-article',
        component: WriteArticle,
        beforeEnter: (to, from, next) => {
            if (!store.getters['auth/authenticated']) {
                return next({
                    name: 'main'
                })
            }
            next()
        }
    },
    {
        path: '/my-articles',
        component: MyArticles,
        beforeEnter: (to, from, next) => {
            if (!store.getters['auth/authenticated']) {
                return next({
                    name: 'main'
                })
            }
            next()
        }
    },
    {
        path: '/update-article/:id',
        component: UpdateArticle,
        beforeEnter: (to, from, next) => {
            if (!store.getters['auth/authenticated']) {
                return next({
                    name: 'main'
                })
            }
            next()
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;