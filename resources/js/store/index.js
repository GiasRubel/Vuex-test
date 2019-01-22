import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/product'

Vue.use(Vuex);

const index = new Vuex.Store({
    state: {
        // products: []
    },
    getters: {
        saleProduct: (state, getters, rootstate) => {

            var saleProduct = rootstate.products.map(product => {
                return {
                    price: product.price/2,
                    title: product.title
                }
            })

            return saleProduct;
        }

    },
    mutations: {
        // fetchProduct: (state, payload) => {
        //     console.log(payload);
        //     Vue.set(state, 'products', payload)
        // },

        // changePrice: state => {
        //     state.products.forEach(product => {
        //         product.price = product.price*2
        //     })
        // },

        // reducePrice: state => {
        //     state.products.forEach(product => {
        //         product.price = product.price/2
        //     })
        // }
    },
    actions: {

        // async fetchProduct ({ commit }) {
        //     commit('fetchProduct', await
        //         axios.get('/products').then(response => {
        //            return  response.data;
        //
        //         }).catch(error => {
        //             console.log(error)
        //             return {msg: error.response.data.errors}
        //         }))
        // },
        //
        // reducePrice: context => {
        //     setTimeout(function () {
        //         context.commit('reducePrice')
        //     },1000)
        // }
    },

    modules: {
        products
    }
});

export default index;