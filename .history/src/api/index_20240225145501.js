import requests from "./apiRequest"

export const reqUserList = () => requests({url:"/getUserList"})

// 拿liao
export const reqChatMsg = (params) => requests({url:"/getChatList", params})

// 拿头像
export const reqHeadImg = (name) => requests({url:`/getAvatar/${name}`});