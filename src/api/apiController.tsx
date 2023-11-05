import axios from 'axios';

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
  async (config) => {
    //!추후 access-token 가져오는 방법 변경
    const accessToken = ACCESS_TOKEN;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response 🧑
instance.interceptors.response.use();

export default instance;
