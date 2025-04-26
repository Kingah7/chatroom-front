import store from "@/store";

let socket = null;

const connect = (name) => {
    socket = new WebSocket(`ws://192.168.1.8/${name}`);

     // 连接建立时触发
     socket.onopen = function () {
    };

    // 接收到消息时触发
    socket.onmessage = function (event) {
        // 将消息推送到仓库
        store.dispatch("receive", event.data);
        return event.data;
    };

    // 连接关闭时触发
    socket.onclose = function () {
    };
    
    return socket;
}

if (socket ==)

export default socket;