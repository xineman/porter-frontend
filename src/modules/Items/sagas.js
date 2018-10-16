import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { fetchAll, fetchRecent } from './actions';
import {
  fetchAll as fetchAllApi,
  fetchRecent as fetchRecentApi,
} from './api';


function* fetchAllSaga() {
  try {
    const { data } = yield call(fetchAllApi());
    yield put(fetchAll.success(data));
  } catch (e) {
    yield put(fetchAll.failure());
  }
}

function* fetchRecentSaga() {
  try {
    const { data } = yield call(fetchRecentApi());
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
