import { handleActions } from 'redux-actions';
import { fetchAll } from './actions';


const items = handleActions(
  {
    [fetchAll.request]: state => ({
      ...state,
      fetchingAll: true,
    }),
    [fetchAll.success]: (state, { payload }) => ({
      ...state,
      fetchingAll: false,
      collection: payload,
    }),
    [fetchAll.failure]: state => ({
      ...state,
      fetchingAll: false,
      collection: [],
    }),
  },
  { collection: [], error: null, fetchingAll: false },
);

export default items;
