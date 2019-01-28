import Vue from 'vue';
import Router from 'vue-router'
import Full from '../components/Full.vue'
import Product from '../components/views/Product.vue'
import Customer from '../components/views/Customer.vue'
import Stores from '../components/views/Stores.vue'
import CreateStores from '../components/views/CreateStores.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path:'/', name:'Full', component:Full},
        {path:'/product', name:'Product', component:Product},
        {path:'/customer', name:'Customer', component:Customer},
        {
            path:'/stores',
            component:{
                render(c) {
                    return c('router-view')
                }
            },
            children: [
                {path:'', name:'Store List', component:Stores},
                {path:'create', name:'Store Create', component:CreateStores}
            ]
        },

    ]
})