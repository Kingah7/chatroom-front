import requests from "./apiRequest"

export const reqUserList = () => requests({url:"/getUserList"})

export const reqChatMsq = (params) => requests({url:"/getChatList", params})