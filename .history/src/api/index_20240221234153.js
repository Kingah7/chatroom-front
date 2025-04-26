import requests from "./apiRequest"

export const reqUserList = () => requests({url:"/getUserList"})

export const reqChatMsg = (params) => requests({url:"/getChatList", params})

export const reqHeadImg = 