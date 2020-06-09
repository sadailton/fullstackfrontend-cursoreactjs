import axios from 'axios';

const api = axios.create({
    baseURL: "https://fulllstackbackend.herokuapp.com/api"
})

export default api;