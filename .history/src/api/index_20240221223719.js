import requests from "./apiRequest"

export const reqUserList = () => requests({url:"/getUserList"})

export const reqChatList = () => requests({url:"/getChatList", })