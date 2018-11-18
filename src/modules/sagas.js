import { fork } from 'redux-saga/effects';
import projectsSaga from './Projects/sagas';
import itemsSaga from './Items/sagas';
import userSaga from './User/sagas';


export default function* rootSaga() {
  yield [
    fork(projectsSaga),
    fork(itemsSaga),
    fork(userSaga),
  ];
}
