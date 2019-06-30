import Vue from "vue"
import App from "./App.vue"
import Vuex from "vuex"
import router from "./router"

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        countIncrease(state, number) {
            state.count = number
        }
    }
})

Vue.prototype.$store = store

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app")
