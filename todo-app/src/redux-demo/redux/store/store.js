  import { configureStore } from '@reduxjs/toolkit'
  import { todoReducer } from '../slice/todoSlice'

  const rootReducer = {
    todoReducer: todoReducer,
  }

  export const store = configureStore({
    reducer: rootReducer,
  })
