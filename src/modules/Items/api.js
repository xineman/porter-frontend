import axios from 'services/api';


export const fetchAll = () => () => axios.get('/tickets');

export const fetchRecent = () => () => axios.get('/tickets/recent');
