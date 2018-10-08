import axios from 'services/api';


export const login = payload => () => axios.post('/auth/login', payload);

export const logout = () => () => axios.post('/auth/logout');
