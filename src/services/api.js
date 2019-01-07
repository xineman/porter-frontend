import axios from 'axios';
import {
  getItem,
} from 'services/localStorage';


const instance = axios.create({
  baseURL: process.env.API_HOST,
});


instance.interceptors.request.use((config) => {
  const token = getItem('token');
  if (!token) {
    return config;
  }
  const newConfig = { ...config };
  newConfig.headers = {
    ...newConfig.headers,
    Authorization: `Bearer ${token}`,
  };
  return newConfig;
});

export default instance;
