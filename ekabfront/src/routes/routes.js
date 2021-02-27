import HomePage from '../components/Home.vue'
import AddPage from '../components/AddItems.vue'
import ViewPage from '../components/ViewItems.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/addpage', component: AddPage },
    { path: '/viewpage', component: ViewPage },
];

export {
    routes
}