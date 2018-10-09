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
      ...getUserFromToken(payload.token),
    }),
    [signIn.failure]: state => ({
      ...state,
      isLoading: false,
    }),
    [signOut.request]: state => ({
      ...state,
      isLoading: true,
    }),
    [signOut.success]: state => ({
      ...state,
      isLoading: false,
      ...getUserFromToken(),
    }),
    [signOut.failure]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      payload,
    }),
  },
  {
    isLoading: false,
    ...getUserFromToken(token),
  },
);

export default user;
