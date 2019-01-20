
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import App from './components/App.vue';
import router from './router'
import index from './store'


const app = new Vue({
    el: '#app',
    router,
    store:index,
    template: '<App/>',
    components: {
        App,

    }


});
