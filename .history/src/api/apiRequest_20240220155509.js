import axios from "axios";

const requests = axios.create({
    baseURL:"/api",
    timeout: -1
});

requests.interceptors.request.use(config => {
    return co
})



export default  requests;