import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/pages/LoginPage";
import ChatRoom from "@/pages/ChatRoomPage";

Vue.use(VueRouter);

const router = new VueRouter([
    {
        path: "/login",
        component: Login
    },
    {
        path: "/chat",
        compont
    }
])