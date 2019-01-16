import axios from 'services/api';


export const fetchAll = () => () => axios.get('/projects');

export const create = data => () => axios.post('/project', data);

export const addUser = params => () => axios.post('/project/user', null, {
  params,
});

export const removeUser = params => () => axios.delete('/project/user', {
  params,
});
