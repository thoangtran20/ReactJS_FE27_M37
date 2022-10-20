import { createAction } from '@reduxjs/toolkit'

const login = createAction('user/login')
const loginSuccess = createAction('user/loginSuccess')
const loginError = createAction('user/loginError')

function* loginWorker() {}

export function* userSaga() {}
