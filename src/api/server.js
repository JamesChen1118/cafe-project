import axios from "axios";

const server = axios.create({
    baseURL: "/api",
    timeout: 6000,
});

export default server;
