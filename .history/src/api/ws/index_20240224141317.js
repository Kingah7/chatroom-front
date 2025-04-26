import store from "@/store";

const connect = (name) => {
    const socket = new WebSocket(`ws://192.168.1.8/${name}`);

     // 连接建立时触发
     socket.onopen = function () {
    };

    // 接收到消息时触发
    socket.onmessage = function (event) {
        store.dispatch
        return event.data;
    };

    // 连接关闭时触发
    socket.onclose = function () {
    };
    
    return socket;
}


export default connect;