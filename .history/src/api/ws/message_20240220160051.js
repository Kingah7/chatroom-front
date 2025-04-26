export function Message(id, from, to, sendTime, data, type) {
    this.id = id;
    this.fromUser = from;
    this.receiveUser = to;
    this.sendTime = sendTime;
    this.data = data;
    this.dataType = type;
}