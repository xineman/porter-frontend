import { createActions } from 'redux-actions';


export const { projects: { fetchAll, select } } = createActions({
  PROJECTS: {
    FETCH_ALL: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
    SELECT: undefined,
  },
});
