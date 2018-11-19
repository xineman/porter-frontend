import { createActions } from 'redux-actions';


export const { projects: { fetchAll, select, create } } = createActions({
  PROJECTS: {
    FETCH_ALL: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
    SELECT: undefined,
    CREATE: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
  },
});
