import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://3.216.153.186:3000',
})

instance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config; 
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance
