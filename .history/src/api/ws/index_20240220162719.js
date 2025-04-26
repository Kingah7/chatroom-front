const connect = (name) => {
    const socket = new WebSocket(`ws://192.168.1.8/${name}`);
    
}


export default connect;