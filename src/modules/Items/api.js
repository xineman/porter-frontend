import axios from 'services/api';


export const fetchAll = project => () => axios.get('/tickets', {
  params: {
    project_token: project,
  },
});

export const fetchRecent = project => () => axios.get('/tickets/recent', {
  params: {
    project_token: project,
  },
});
