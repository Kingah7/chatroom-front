import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/pages/LoginPage";
import ChatRoom from "@/pages/chat";
import store from "@/store"

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
    if (store.state.userName != "") {
        if (to.path == "/login") {
            // 已经登录
            next(false);
            Vue.prototype.$message.warning("您已登录，无需再次")
        }
        else next();
    }
    else {
        if ()
        Vue.prototype.$message.error("您还未登录，请先登录!");
        next();
    }
})

export default router;