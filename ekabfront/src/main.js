import {createApp} from 'vue'
import {mystore} from './store/store.js'
import {myrouter} from './routes/routes.js'
import App from './App.vue'

const app = createApp(App)
app.use(mystore)
app.use(myrouter)
app.mount('#app')
