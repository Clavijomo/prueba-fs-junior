import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1',
    timeout: 5000
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error', error.response || error.message);
        return Promise.reject(error.response || error.message);
    }
);

export default apiClient;