import axios from "axios";

const requests = axios.create({
    baseURL:"/api",
    timeout: -1
});

requests.interceptors.



export default  requests;