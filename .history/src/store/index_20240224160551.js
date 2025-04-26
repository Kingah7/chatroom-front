import Vue from "vue"
import vuex from "vuex";

Vue.use(vuex);

export default new vuex.Store({
    state: {
        // 接收的消息
        message: []
    },
    mutations: {
        RECEIVE(state, message) {
            state.message.
        }
    },
    actions: {
        // 发送消息
        send({ commit }, msg) {

        },
        // 接收消息
        receive({commit}, msg) {
            commit("RECEIVE", msg);
        }
    },
    getters: {

    }
})