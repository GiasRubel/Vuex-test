import Vue from 'vue';

const state = {
    products: []
};
const getters = {

};
const mutations = {
    fetchProduct: (state, payload) => {
        // console.log(payload);
        Vue.set(state, 'products', payload)
    },


    reducePrice: state => {
        state.products.forEach(product => {
            product.price = product.price/2
        })
    },

};
const actions = {
    async fetchProduct ({ commit }) {
        commit('fetchProduct', await
            axios.get('/products').then(response => {
               return  response.data;

            }).catch(error => {
                console.log(error)
                return {msg: error.response.data.errors}
            }))
    },

    reducePrice: context => {
        setTimeout(function () {
            context.commit('reducePrice')
        },1000)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}