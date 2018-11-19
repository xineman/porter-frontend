import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { fetchAll, create } from './actions';
import {
  fetchAll as fetchAllApi,
  create as createApi,
} from './api';


function* fetchAllSaga() {
  try {
    const { data } = yield call(fetchAllApi());
    yield put(fetchAll.success(data));
  } catch (e) {
    yield put(fetchAll.failure());
  }
}

function* createSaga({ payload }) {
  try {
    const { data } = yield call(createApi(payload));
    yield put(create.success(data));
  } catch (e) {
    yield put(create.failure());
  }
}

function* rootProjectsSaga() {
  yield all([
    takeLatest([fetchAll.request], fetchAllSaga),
    takeLatest([create.request], createSaga),
  ]);
}

export default rootProjectsSaga;
