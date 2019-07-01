import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("./pages/login.vue")
        },
        {
            path: "/",
            name: "index",
            component: () => import("./pages/index.vue")
        },
        {
            path: "/userCenter",
            name: "userCenter",
            component: () => import("./pages/userCenter.vue")
        },
        {
            path: "/course/:id",
            name: "course",
            component: () => import("./pages/course.vue")
        }
    ]
})

export default router
