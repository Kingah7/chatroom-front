import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/pages/LoginPage";
import ChatRoom from "@/pages/ChatRoomPage";

Vue.use(VueRouter);

con


const router = new VueRouter([
    {
        path: "/login",
        component: Login
    },
    {
        path: "/chat",
        component: ChatRoom
    }
])


export default router;