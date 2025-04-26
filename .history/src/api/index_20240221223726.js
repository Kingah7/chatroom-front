import requests from "./apiRequest"

export const reqUserList = () => requests({url:"/getUserList"})

export const reqChatList = (params) => requests({url:"/getChatList", params})