import axios from 'axios';

const DOMAIN = process.env.REACT_APP_API_URL;

export const USER = 'user';
export const ACCESS_TOKEN = 'token';

export const http = axios.create({
  baseURL: DOMAIN,
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    config.headers['Content-Type'] = 'application/json';

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // console.log('Request config:', config);

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
