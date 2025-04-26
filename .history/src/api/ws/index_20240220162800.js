const connect = (name) => {
    const socket = new WebSocket(`ws://192.168.1.8/${name}`);

     // 连接建立时触发
     socket.onopen = function () {
    };

    // 接收到消息时触发
    socket.onmessage = function (event) {
        console.log(event)
        displayMessage("Received message: " + event.data);
    };

    // 连接关闭时触发
    socket.onclose = function () {
        displayMessage("WebSocket connection closed.");
    };

    alert(`${inputName.value}成功建立连接!`)
}


export default connect;