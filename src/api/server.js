import axios from 'axios';

const server = axios.create({
    baseURL: '/api',
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default server;