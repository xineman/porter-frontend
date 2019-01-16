import { createActions } from 'redux-actions';


export const {
  projects: {
    fetchAll,
    select,
    create,
    addUser,
    removeUser,
  },
} = createActions({
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
      RESET_STATUS: undefined,
    },
    ADD_USER: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
    REMOVE_USER: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
  },
});
