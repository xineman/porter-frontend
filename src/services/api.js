import axios from 'axios';
import {
  getItem,
} from 'services/localStorage';


const instance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
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
