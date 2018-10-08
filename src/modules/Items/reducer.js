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
      collection: payload.items,
    }),
    [fetchAll.failure]: (state, { payload }) => ({
      ...state,
      fetchingAll: false,
      collection: [],
      error: payload.message,
    }),
  },
  { collection: [], error: null, fetchingAll: false },
);

export default items;
