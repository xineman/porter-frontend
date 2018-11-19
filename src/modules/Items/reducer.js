import { handleActions } from 'redux-actions';
import { fetchAll, fetchRecent } from './actions';


const initialRecents = {
  TODAY: [],
  YESTERDAY: [],
};

const items = handleActions(
  {
    [fetchAll.request]: state => ({
      ...state,
      fetchingAll: true,
    }),
    [fetchAll.success]: (state, { payload }) => ({
      ...state,
      fetchingAll: false,
      collection: payload.reverse(),
    }),
    [fetchAll.failure]: state => ({
      ...state,
      fetchingAll: false,
      collection: [],
    }),
    [fetchRecent.request]: state => ({
      ...state,
      fetchingRecent: true,
      recentCollection: initialRecents,
    }),
    [fetchRecent.success]: (state, { payload }) => ({
      ...state,
      fetchingRecent: false,
      recentCollection: {
        TODAY: payload.TODAY.reverse(),
        YESTERDAY: payload.YESTERDAY.reverse(),
      },
    }),
    [fetchRecent.failure]: state => ({
      ...state,
      fetchingRecent: false,
      recentCollection: initialRecents,
    }),
  },
  {
    collection: [],
    recentCollection: initialRecents,
    error: null,
    fetchingAll: false,
    fetchingRecent: false,
  },
);

export default items;
