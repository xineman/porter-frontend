import { handleActions } from 'redux-actions';
import {
  getItem,
} from 'services/localStorage';
import { getUserFromToken } from 'services/jwt';
import {
  signIn,
  signOut,
} from './actions';


const token = getItem('token');


const user = handleActions(
  {
    [signIn.request]: state => ({
      ...state,
      isLoading: true,
    }),
    [signIn.success]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      payload,
    }),
    [signIn.failure]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      payload,
    }),
    [signOut.request]: (state, { payload }) => ({
      ...state,
      isLoading: true,
      payload,
    }),
    [signOut.success]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      ...getUserFromToken(payload.token),
    }),
    [signOut.failure]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      payload,
    }),
  },
  {
    payload: null,
    isLoading: false,
    ...getUserFromToken(token),
  },
);

export default user;
