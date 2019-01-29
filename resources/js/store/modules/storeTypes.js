import * as types from '../types';
import Vue from 'vue';

const state = {
    types: ['grocery', 'Super Shop', 'meat', 'food'],
    test: 0,
    message: '',
    stores: {},
    storelist: {},
    newStores: {}
};


const getters = {
    [types.TEST_INPUT]: state => {
        return state.test;
    },

    message: state => {
        return state.message;
    },

    storelist: state => {
        return state.storelist;
    },

    stores: state => {
        return state.stores;
    },

};


const mutations = {
    [types.MUTATE_TEST_INPUT]: (state, payload) => {
        state.test = payload;
    },

    insertStores: (state, payload) => {
        state.stores = {};
        return state.message = payload;
    },

    fetchStores: (state, payload) => {
        return state.storelist = payload;
    },

    fetchStore: (state, payload) => {
        return state.stores = payload;
    },

    emptyStores: (state, payload) => Vue.set(state, 'stores', payload),

    updateStore: (state, payload) => {
        return state.message = payload;
    },

    deleteStore: (state, payload) => {
        console.log(payload)
    }
};


const actions = {
    [types.MUTATE_TEST_INPUT]: ({commit}, payload) => {
        commit(types.MUTATE_TEST_INPUT, payload);
    },

    insertStores: (context, payload) => {
        return axios.post('/store-types', payload).then(response => {
            context.commit('insertStores', response.data);
            setTimeout(() => {
                context.commit('insertStores', '')
            }, 2000)
        }).catch(error => {
            console.log(error)
        })
    },

    fetchStores: ({commit}) => {
        return axios.get('/store-types').then(response => {
            commit('fetchStores', response.data)
        }).catch(error => {
            console.log(error)
        })
    },

    fetchStore: ({commit}, payload) => {
        return axios.get('/store-types/' + payload + '/edit').then(response => {
            commit('fetchStore', response.data)
        }).catch(error => {
            console.log(error)
        })
    },

    emptyStores: (context, payload) => context.commit('emptyStores', payload),

    updateStore: (context, payload) => {
        return axios.patch('/store-types/' + payload.id, payload.store).then(response => {
            context.commit('updateStore', response.data)
        }).catch(error => {
            console.log(error)
        })
    },

    deleteStore: (context, payload) => {
        axios.delete('/store-types/' + payload).then(response => {
            context.commit('deleteStore', response.data)
        }).catch(error => {
            console.log(error)
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
}