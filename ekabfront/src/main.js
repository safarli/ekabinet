import {createApp} from 'vue'
import {store} from './store/store.js'
import {routes} from './routes/routes.js'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
