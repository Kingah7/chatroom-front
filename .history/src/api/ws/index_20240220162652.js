const connect = (name) => {
    conew WebSocket(`ws://192.168.1.8/${name}`);
}