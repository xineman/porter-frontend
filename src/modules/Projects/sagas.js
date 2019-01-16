import { delay } from 'redux-saga';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import {
  fetchAll,
  create,
  addUser,
  removeUser,
} from './actions';
import {
  fetchAll as fetchAllApi,
  create as createApi,
  addUser as addUserApi,
  removeUser as removeUserApi,
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
    yield call(delay, 3000);
    yield put(create.resetStatus());
  } catch (e) {
    yield put(create.failure());
  }
}

function* addUserSaga({ payload }) {
  try {
    yield call(addUserApi(payload));
    yield put(addUser.success(payload));
  } catch (e) {
    yield put(addUser.failure());
  }
}

function* removeUserSaga({ payload }) {
  try {
    yield call(removeUserApi(payload));
    yield put(removeUser.success(payload));
  } catch (e) {
    yield put(removeUser.failure());
  }
}

function* rootProjectsSaga() {
  yield all([
    takeLatest([fetchAll.request], fetchAllSaga),
    takeLatest([create.request], createSaga),
    takeLatest([addUser.request], addUserSaga),
    takeLatest([removeUser.request], removeUserSaga),
  ]);
}

export default rootProjectsSaga;
