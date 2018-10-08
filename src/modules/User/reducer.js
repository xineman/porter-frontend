import { handleActions } from 'redux-actions';
import {
  signIn,
  signOut,
} from './actions';


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
      payload,
    }),
    [signOut.failure]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      payload,
    }),
  },
  { payload: null, isLoading: false, isLoggedIn: true },
);

export default user;
