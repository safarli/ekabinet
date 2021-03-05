import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import HomePage from '../components/Home.vue'
import UserManagementPage from '../components/UserManagement.vue'
import UserAddPage from '../components/UserAdd.vue'
import UserViewPage from '../components/UserView.vue'



const myroutes = [
    { path: '/', component: HomePage },
    {
        path: '/usermgmt', component: UserManagementPage, children: [
            { path: 'useradd', component: UserAddPage },
            { path: 'userview', component: UserViewPage }
        ]
    },
]

export const myrouter = createRouter({
    history: createWebHistory(),
    routes: myroutes
})