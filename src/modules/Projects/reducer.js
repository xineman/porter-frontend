import { handleActions } from 'redux-actions';
import {
  fetchAll,
  create,
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
    [create.request]: state => ({
      ...state,
      creatingStatus: 'fetching',
    }),
    [create.success]: state => ({
      ...state,
      creatingStatus: 'success',
    }),
    [create.failure]: state => ({
      ...state,
      creatingStatus: 'failure',
    }),
    [create.resetStatus]: state => ({
      ...state,
      creatingStatus: null,
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
    creatingStatus: null,
  },
);

export default projects;
