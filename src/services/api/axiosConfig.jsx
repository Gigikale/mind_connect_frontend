import axios from 'axios';

const BASE_URL = "http://localhost:8020/api/v1";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})