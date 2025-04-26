import Vue from "vue";
import VueRouter from "vu
import { prototype } from "core-js/core/dict";
e-router";

import Login from "@/pages/LoginPage";
import ChatRoom from "@/pages/ChatRoomPage";

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = (location, success, error) => {
    if (success && error) {
        originPush.cancelIdleCallback(this, location, success, error);
    } else 
}


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