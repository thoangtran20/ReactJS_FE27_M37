import { all, fork } from 'redux-saga/effects'
import { watchTodoSaga } from './todoSaga'
import { watchUserSaga } from './userSaga'

export function* appSaga() {
  yield all([fork(watchTodoSaga), fork(watchUserSaga)])
}

// non-blocking