import { handleActions } from 'redux-actions';
import { fetchAll, select } from './actions';


const projects = handleActions(
  {
    [fetchAll.request]: state => ({
      ...state,
      fetching: true,
    }),
    [fetchAll.success]: (state, { payload }) => ({
      ...state,
      fetching: false,
      collection: payload,
    }),
    [fetchAll.failure]: state => ({
      ...state,
      fetching: false,
      collection: [],
    }),
    [select]: (state, { payload }) => ({
      ...state,
      selected: payload,
    }),
  },
  {
    collection: [],
    selected: null,
    error: null,
    fetching: false,
  },
);

export default projects;
