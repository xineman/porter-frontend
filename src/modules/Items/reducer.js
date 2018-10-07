import { handleActions } from 'redux-actions';
import { fetchAll, fetchAllSuccess } from './actions';


const items = handleActions(
  {
    [fetchAll]: state => ({
      ...state,
      fetchingAll: true,
    }),
    [fetchAllSuccess]: (state, { payload }) => ({
      ...state,
      fetchingAll: false,
      collection: payload.items,
    }),
    FETCH_ALL_FAILURE: (state, { payload }) => ({
      ...state,
      fetchingAll: false,
      collection: payload.items,
    }),
  },
  { collection: [], fetchingAll: false },
);

export default items;
