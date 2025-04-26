import store from "@/store";


const connect = (name) => {
    const socket = new WebSocket(`ws://localhost:8888/websocket/${name}`);

     // 连接建立时触发
     socket.onopen = function () {
        store.commit("SETUSERNAME", name);
    };

    // 接收到消息时触发
    socket.onmessage = function (event) {
        // 将消息推送到仓库
        store.dispatch("receive", JSON.parse(event.data));
    };

    // 连接关闭时触发
    socket.onclose = function () {
    };

    return socket;
}



export default connect;