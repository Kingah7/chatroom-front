import requests from "./apiRequest"

// 拿zai'x
export const reqUserList = () => requests({url:"/getUserList"})

// 拿聊天记录
export const reqChatMsg = (params) => requests({url:"/getChatList", params})

// 拿头像
export const reqHeadImg = (name) => requests({url:`/getAvatar/${name}`});