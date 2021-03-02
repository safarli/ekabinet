import HomePage from '../components/Home.vue'
import AddPage from '../components/AddItems.vue'
import ViewPage from '../components/ViewItems.vue'
import Inventory from '../components/Inventory.vue'
import InventoryView from '../components/InventoryView.vue'
import InventoryAdd from '../components/InventoryAdd.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/addpage', component: AddPage },
    { path: '/viewpage',  component: ViewPage},
    {
        path: '/inventory', component: Inventory,
        children: [
            {
                path: 'view',
                component: InventoryView
            },
            {
                path: 'add',
                component: InventoryAdd
            }
        ]
    }
];

export {
    routes
}