import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/pages/LoginPage";
import ChatRoom from "@/pages/chat/ChatRoomPage";

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = (location, success, error) => {
    if (success && error) {
        originPush.call(this, location, success, error);
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}


const router = new VueRouter([
    {
        path
    },
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