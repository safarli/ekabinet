import {createApp} from 'vue'
// import {store} from './store/store.js'
import {routes} from './routes/routes.js'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount("#app")

// app.component(App)
// app.use(router)
// app.use(store)
// app.mount("#app")