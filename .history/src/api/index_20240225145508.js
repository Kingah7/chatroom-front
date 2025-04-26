import requests from "./apiRequest"

// 拿在线列表A
export const reqUserList = () => requests({url:"/getUserList"})

// 拿聊天记录
export const reqChatMsg = (params) => requests({url:"/getChatList", params})

// 拿头像
export const reqHeadImg = (name) => requests({url:`/getAvatar/${name}`});