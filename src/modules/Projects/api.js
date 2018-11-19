import axios from 'services/api';


export const fetchAll = () => () => axios.get('/projects');

export const create = data => () => axios.post('/project', data);
