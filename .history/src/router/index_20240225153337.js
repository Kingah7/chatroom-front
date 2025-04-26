import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/pages/LoginPage";
import ChatRoom from "@/pages/chat";

Vue.use(VueRouter);

const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, success, error) {
    if (success && error) {
        originPush.call(this, location, success, error);
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}


const router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/chat",
            component: ChatRoom
        }
    ]
})

router.beforeEach((to, from, next) => {
    
    next();
})

export default router;