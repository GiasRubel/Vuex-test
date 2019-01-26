import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/product'
import customer from './modules/customer'

Vue.use(Vuex);

const index = new Vuex.Store({


    modules: {
        products,
        customer
    }
});

export default index;