import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'services/api';
import { fetchAll } from './actions';


function* fetchAllSaga() {
  try {
    yield call(() => axios.get('/test'));
    yield put(fetchAll.success({ items: 0 }));
  } catch (e) {
    yield put(fetchAll.failure({ items: 0 }));
  }
}

function* itemsSaga() {
  yield takeLatest([fetchAll.request], fetchAllSaga);
}

export default itemsSaga;
