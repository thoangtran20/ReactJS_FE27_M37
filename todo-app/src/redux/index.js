import { configureStore } from '@reduxjs/toolkit'
import { todoListReducer } from './slice/todoListSlice'
import createSagaMiddleware from 'redux-saga'
import { appSaga } from './saga'

// Tạo sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

export const rootReducer = {
  todoListReducer: todoListReducer,
}

// Trong middleware của redux-toolkit có chứa các middleware
// redux-thunk
// redux-devtool compose

export const appStore = configureStore({
  reducer: rootReducer,
  //
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
    }), // [redux-thunk-middleware, redux-devtool compose,...]
    sagaMiddleware,
  ],
})

// Khởi chạy saga
sagaMiddleware.run(appSaga)
