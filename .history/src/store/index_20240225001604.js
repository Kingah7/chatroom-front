import Vue from "vue"
import Vuex from "vuex";

Vue.use(Vuex);

const vuex =  new Vuex.Store({
    state: {
        // 接收的消息
        chatList: [],
        // 用户
        userName: "kingah"
    },
    mutations: {
        RECEIVE(state, msg) {
            state.chatList.push(msg);
        },
        GETCHATMSG(state, msgList) {
            msgList.forEach(msg => {
                state.chatList.push(msg);
            })
        }
    },
    actions: {
        // 发送消息
        send({ commit }, msg) {
            commit("RECEIVE", msg);
        },
        // 接收消息
        receive({commit}, msg) {
            loi
            commit("RECEIVE", msg);
        },
        // 获取聊天记录
        getChatMsg({commit}, msgList) {
            commit("GETCHATMSG", msgList);
        }
    },
    getters: {

    }
})


export default vuex;