import axios from "axios";

const requests = axios.create({
    baseURL:"/api",
    timeout: -1
});

requests.interceptors.request.use(config => {
    return config;
}, er)



export default  requests;