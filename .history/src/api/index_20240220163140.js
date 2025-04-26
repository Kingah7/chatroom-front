import requests from "./apiRequest"

export const reqUserList = () => requests({url:"/getUser"})