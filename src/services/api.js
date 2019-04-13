import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pacheco-dropbox-backend.herokuapp.com'
})

export default api;