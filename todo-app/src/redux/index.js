import { configureStore } from '@reduxjs/toolkit'
import { todoListReducer } from './slice/todoListSlice'

export const rootReducer = {
  todoListReducer: todoListReducer,
}

export const appStore = configureStore({
  reducer: rootReducer,
})
