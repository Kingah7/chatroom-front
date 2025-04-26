import requests from "./apiRequest"

export const reqUserList = () => requests({url:"/getUserList"})

export const getChatMsg = (params) => requests({url:"/getChatList", params})