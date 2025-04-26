import axios from "axios";

const requests = axios.create({
    baseURL:"/api",
    timeout: -
})