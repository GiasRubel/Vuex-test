import Vue from 'vue';
import Router from 'vue-router';
import Full from '../components/Full.vue';
import Product from '../components/views/Product.vue';
import Customer from '../components/views/Customer.vue';
import Article from '../components/views/Article.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path:'/', name:'Full', component:Full},
        {path:'/article-list', name:'Article', component:Article},
        {path:'/product', name:'Product', component:Product},
        {path:'/customer', name:'Customer', component:Customer},
    ]
})