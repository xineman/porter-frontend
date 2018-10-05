import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { createAction } from 'redux-actions';
import axios from 'services/api';


function* fetchAll() {
  try {
    yield call(() => axios.get('/test'));
    yield put(createAction('FETCH_ALL_SUCCESS')({ items: 0 }));
  } catch (e) {
    yield put(createAction('FETCH_ALL_FAILURE')({ items: 0 }));
  }
}

function* itemsSaga() {
  yield takeLatest('FETCH_ALL', fetchAll);
}

export default itemsSaga;
