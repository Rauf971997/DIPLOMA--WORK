import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

// Добавляем API ключ в каждый запрос
instance.interceptors.request.use(config => {
    config.params = {
        ...config.params,
        api_key: 'bfbd5290debb394a9980589a6a6bab39', // Замените на ваш API ключ
    };
    return config;
});

export default instance;
