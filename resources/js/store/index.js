import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/product'

Vue.use(Vuex);

const index = new Vuex.Store({
    state: {
        newProducts: [
            {id:1, name:'kamal'},
            {id:2, name:'jamal'},
        ]
    },
    getters: {
       // getProduct:state => state.newProducts
       // getProduct:(state, getters, rootState) => {return rootState.products.products }

        saleProduct: (state, getters, rootState) => {

            var saleProduct = rootState.products.products.map(product => {
                return {
                    price: product.price/2,
                    title: product.title
                }
            });

            return saleProduct;
        }

    },
    mutations: {
        // fetchProduct: (state, payload) => {
        //     console.log(payload);
        //     Vue.set(state, 'products', payload)
        // },

        // changePrice: state => state.changePrice

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
        changePrice: ({context, commit, rootState}) =>{
            rootState.products.products.forEach(product => {
                        product.price = product.price*2
                    })
            // context.commit('changePrice')
        }


    },

    modules: {
        products
    }
});

export default index;