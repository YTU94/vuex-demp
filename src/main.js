import Vue from "vue"
import App from "./App.vue"
import Vuex from "vuex"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

Vue.use(Vuex)

// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         countIncrease(state, number) {
//             state.count = number
//         }
//     }
// })

Vue.prototype.$store = store

router.beforeEach((to, from, next) => {
    console.log(store.state, "store.state")
    if (store.state.userInfo || to.path === "/login") {
        next()
    } else {
        next({
            path: "/login"
        })
    }
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app")
