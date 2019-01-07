import { handleActions } from 'redux-actions';
import {
  fetchAll,
  select,
  addUser,
  removeUser,
} from './actions';


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
    [addUser.success]: (state, { payload }) => {
      const collection = [...state.collection];
      const changedProjectIndex = collection.findIndex(p => p.token === payload.token);
      const changedProject = {
        ...collection[changedProjectIndex],
        userEmails: [
          ...collection[changedProjectIndex].userEmails,
          payload.newEmail,
        ],
      };
      collection.splice(changedProjectIndex, 1, changedProject);
      return {
        ...state,
        collection,
      };
    },
    [removeUser.success]: (state, { payload }) => {
      const collection = [...state.collection];
      const changedProjectIndex = collection.findIndex(p => p.token === payload.token);
      const userEmails = [...collection[changedProjectIndex].userEmails];
      userEmails.splice(userEmails.findIndex(e => e === payload.email), 1);
      const changedProject = {
        ...collection[changedProjectIndex],
        userEmails,
      };
      collection.splice(changedProjectIndex, 1, changedProject);
      return {
        ...state,
        collection,
      };
    },
  },
  {
    collection: [],
    selected: null,
    error: null,
    fetching: false,
  },
);

export default projects;
