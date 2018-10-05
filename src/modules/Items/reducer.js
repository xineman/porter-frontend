import { handleActions, createAction } from 'redux-actions';


export const fetchAll = createAction('FETCH_ALL');

// export {app:appActions} = createActions({
//   APP:{
//     request:undefined,

//   }
// })


const items = handleActions(
  {
    [fetchAll]: state => ({
      ...state,
      fetchingAll: true,
    }),
    FETCH_ALL_SUCCESS: (state, { payload }) => ({
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
