import { createActions } from 'redux-actions';


export const { items: { fetchAll, fetchRecent, updateStatus } } = createActions({
  ITEMS: {
    FETCH_ALL: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
    FETCH_RECENT: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
    UPDATE_STATUS: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
  },
});
