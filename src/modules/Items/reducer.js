import { handleActions } from 'redux-actions';
import { fetchAll, fetchRecent, updateStatus } from './actions';


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
      const collection = tickets
        .reverse()
        .reduce((res, c) => {
          if (res[c.number]) {
            res[c.number].push(c);
          } else {
            res[c.number] = [c];
          }
          return res;
        }, {});
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
      return {
        ...state,
        fetchingRecent: false,
        recentCollection: {
          TODAY: tickets.TODAY.reverse(),
          YESTERDAY: tickets.YESTERDAY.reverse(),
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
    error: null,
    fetchingAll: false,
    fetchingRecent: false,
  },
);

export default items;
