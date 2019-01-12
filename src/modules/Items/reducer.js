import { handleActions } from 'redux-actions';
import { fetchAll, fetchRecent, updateStatus } from './actions';
import { reduceErrorsArray } from './helpers';


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
    [fetchAll.success]: (state, { payload: { tickets, ticketsStatus } }) => {
      const statuses = {};
      ticketsStatus.forEach((s) => {
        statuses[s.ticketNumber] = s.status;
      });
      const collection = reduceErrorsArray(tickets);
      return {
        ...state,
        fetchingAll: false,
        collection,
        statuses,
        uniqueTickets: Object.keys(collection).map(k => collection[k][0]),
      };
    },
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
    [fetchRecent.success]: (state, { payload: { tickets, ticketsStatus } }) => {
      const statuses = {};
      ticketsStatus.forEach((s) => {
        statuses[s.ticketNumber] = s.status;
      });
      const today = reduceErrorsArray(tickets.TODAY);
      const yesterday = reduceErrorsArray(tickets.YESTERDAY);
      return {
        ...state,
        fetchingRecent: false,
        recentCollection: {
          TODAY: today,
          YESTERDAY: yesterday,
        },
        uniqueRecentTickets: {
          TODAY: Object.keys(today).map(k => today[k][0]),
          YESTERDAY: Object.keys(yesterday).map(k => yesterday[k][0]),
        },
        statuses,
      };
    },
    [fetchRecent.failure]: state => ({
      ...state,
      fetchingRecent: false,
      recentCollection: initialRecents,
    }),
    [updateStatus.success]: (state, { payload: { ticketNumber, status } }) => ({
      ...state,
      statuses: {
        ...state.statuses,
        [ticketNumber]: status,
      },
    }),
  },
  {
    collection: {},
    uniqueTickets: [],
    statuses: {},
    recentCollection: initialRecents,
    uniqueRecentTickets: initialRecents,
    error: null,
    fetchingAll: false,
    fetchingRecent: false,
  },
);

export default items;
