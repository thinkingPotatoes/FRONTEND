import axios, { InternalAxiosRequestConfig } from 'axios';

export const BASE_URL = 'http://localhost:8080';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request 🧑
instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');
    config.headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : '';

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// Response 🧑
instance.interceptors.response.use();

export default instance;
