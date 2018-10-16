import { fork } from 'redux-saga/effects';
import itemsSaga from './Items/sagas';
import userSaga from './User/sagas';


export default function* rootSaga() {
  yield [
    fork(itemsSaga),
    fork(userSaga),
  ];
}
