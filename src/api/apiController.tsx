import axios, { InternalAxiosRequestConfig } from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
export const BASE_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    // Authorization: 'Bearer ',
    'Content-Type': 'application/json',
  },
});

// Request 🧑
instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

// Response 🧑
instance.interceptors.response.use();

export default instance;
