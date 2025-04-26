import Vue from "vue"
import vuex from "vuex";

Vue.use(vuex);

export default new vuex.Store({
    state: {
        message: {}
    },
    mutations: {

    },
    actions: {
        send({ commit }, msg) {

        },
        // 
        receive({commit}, msg) {

        }
    },
    getters: {

    }
})