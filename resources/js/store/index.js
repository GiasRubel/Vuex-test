import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/product'
import customer from './modules/customer'
import storeTypes from './modules/storeTypes'

Vue.use(Vuex);

const index = new Vuex.Store({


    modules: {
        products,
        customer,
        storeTypes,

    }
});

export default index;