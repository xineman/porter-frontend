import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { fetchAll, fetchRecent } from './actions';
import {
  fetchAll as fetchAllApi,
  fetchRecent as fetchRecentApi,
} from './api';


function* fetchAllSaga({ payload }) {
  try {
    const { data } = yield call(fetchAllApi(payload));
    yield put(fetchAll.success(data));
  } catch (e) {
    yield put(fetchAll.failure());
  }
}

function* fetchRecentSaga({ payload }) {
  try {
    const { data } = yield call(fetchRecentApi(payload));
    yield put(fetchRecent.success(data));
  } catch (e) {
    yield put(fetchRecent.failure());
  }
}

function* rootUserSaga() {
  yield all([
    takeLatest([fetchAll.request], fetchAllSaga),
    takeLatest([fetchRecent.request], fetchRecentSaga),
  ]);
}

export default rootUserSaga;
