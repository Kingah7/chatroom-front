import Vue from "vue"
import vuex from "vuex";

Vue.use(vuex);

export default new vuex.Store({
    state: {
        // jie'h's
        message: {}
    },
    mutations: {

    },
    actions: {
        // 发送消息
        send({ commit }, msg) {

        },
        // 接收消息
        receive({commit}, msg) {

        }
    },
    getters: {

    }
})