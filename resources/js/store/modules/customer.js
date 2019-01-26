import * as types from '../types';
const state = {
    newProducts: [
        {id: 1, name: 'kamal'},
        {id: 2, name: 'jamal'},
    ]
};
const getters = {
    [types.SALEPRODUCT]: (state, getters, rootState) => {

        var saleProduct = rootState.products.products.map(product => {
            return {
                price: product.price / 2,
                title: product.title
            }
        });

        return saleProduct;
    },

    [types.PRODUCTS_LIST]: (state, getters, rootState) => {
        var products = rootState.products.products;
        return products;
    }
};

const mutations = {
    changePrice:(state, payload) => {
      payload.forEach(product => {
          product.price = product.price *2;
      })
    }
};

const actions = {
    actualPrice: ({context, commit, rootState}) => {
        rootState.products.products.forEach(product => {
             product.price =  product.price +1;
             return product.price;
        })

    },
    changePrice:(context, payload) => {
        context.commit('changePrice',payload)
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
