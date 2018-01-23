import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-30486.firebaseio.com'
})

export default instance;