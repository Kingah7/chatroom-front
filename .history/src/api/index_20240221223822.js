import requests from "./apiRequest"

export const reqUserList = () => requests({url:"/getUserList"})

export const geChatMsg = (params) => requests({url:"/getChatList", params})