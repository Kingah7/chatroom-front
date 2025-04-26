import requests from "./apiRequest"

export const reqUserList = () => requests({url:"/getUserList"})

export const reqChatList = (pa) => requests({url:"/getChatList", params})