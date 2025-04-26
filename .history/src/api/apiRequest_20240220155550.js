import axios from "axios";

const requests = axios.create({
    baseURL:"/api",
    timeout: -1
});

requests.interceptors.request.use(config => {
    return config;
}, error => {
    console.log(error);
})


requests.interceptors.response.use(result => {
    return result.data
})


export default  requests;