/*
const state = {
    products: []
};
const getters = {
    saleProduct: state => {
        var saleProduct = state.products.map(product => {
            return {
                price: product.price/2,
                title: product.title
            }
        });
        console.log(saleProduct);
        return saleProduct;
    }
};

const mutations = {
    changePrice: state => {
        state.products.forEach(product => {
            product.price = product.price*2
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
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}*/
