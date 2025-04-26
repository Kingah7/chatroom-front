import Vue from "vue";
import VueRouter from "vu
import { prototype } from "core-js/core/dict";
e-router";

import Login from "@/pages/LoginPage";
import ChatRoom from "@/pages/ChatRoomPage";

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = (locatiosuccess, error)


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