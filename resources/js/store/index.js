import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const index = new Vuex.Store({
    state: {
        products: []
    },
    getters: {
        saleProduct: state => {

            var saleProduct = state.products.map(product => {
                return {
                    title: product.title,
                    price: product.price/2
                }
            });

            return saleProduct;
        }

    },
    mutations: {
        fetchProduct: (state, payload) => {
            console.log(payload);
            Vue.set(state, 'products', payload)
        },

        changePrice: (state, payload) => {
            console.log(payload)
        }
    },
    actions: {

        async fetchProduct ({ commit }) {
            commit('fetchProduct', await
                axios.get('/products').then(response => {
                   return  response.data;

                }).catch(error => {
                    console.log(error)
                    return {msg: error.response.data.errors}
                }))
        },
    }
});

export default index;