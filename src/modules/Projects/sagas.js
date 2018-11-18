import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { fetchAll } from './actions';
import {
  fetchAll as fetchAllApi,
} from './api';


function* fetchAllSaga() {
  try {
    const { data } = yield call(fetchAllApi());
    yield put(fetchAll.success(data));
  } catch (e) {
    yield put(fetchAll.failure());
  }
}

function* rootProjectsSaga() {
  yield takeLatest([fetchAll.request], fetchAllSaga);
}

export default rootProjectsSaga;
