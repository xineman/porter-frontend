import { createActions } from 'redux-actions';


export const { items: { fetchAll, update } } = createActions({
  ITEMS: {
    FETCH_ALL: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
    UPDATE: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
  },
});
