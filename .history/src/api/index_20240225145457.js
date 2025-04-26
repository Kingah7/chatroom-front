import requests from "./apiRequest"

export const reqUserList = () => requests({url:"/getUserList"})

export const reqChatMsg = (params) => requests({url:"/getChatList", params})

// 拿头像
export const reqHeadImg = (name) => requests({url:`/getAvatar/${name}`});