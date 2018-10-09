import {
  call, put, takeEvery, all,
} from 'redux-saga/effects';
import {
  removeItem,
  setItem,
} from 'services/localStorage';
import {
  signIn,
  signOut,
} from './actions';
import {
  login,
  logout,
} from './api';


function* signInSaga({ payload }) {
  try {
    const { data } = yield call(login(payload));
    yield put(signIn.success(data));
    setItem('token', data.token);
  } catch (e) {
    yield put(signIn.failure());
  }
}

function* signOutSaga() {
  try {
    yield call(logout());
    removeItem('token');
    yield put(signOut.success());
  } catch (e) {
    yield put(signOut.failure());
  }
}

function* rootUserSaga() {
  yield all([
    takeEvery([signIn.request], signInSaga),
    takeEvery([signOut.request], signOutSaga),
  ]);
}

export default rootUserSaga;
