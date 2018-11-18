/* eslint-disable import/prefer-default-export */
import axios from 'services/api';


export const fetchAll = () => () => axios.get('/projects');
