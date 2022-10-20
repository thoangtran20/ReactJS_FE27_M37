import { all, fork } from 'redux-saga/effects'
import { todoSaga } from './todoSaga'
import { userSaga } from './userSaga'

export function* appSaga() {
  yield all([fork(todoSaga), fork(userSaga)])
}
  