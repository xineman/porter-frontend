import axios from 'services/api';


export const login = payload => () => axios.post('/admin/auth/login', payload);

export const logout = () => () => axios.post('/admin/auth/logout');
