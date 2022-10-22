import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { clientServer } from '../../server/clientServer'
import {
  addTodoItemAsync,
  addTodoItemAsyncError,
  addTodoItemAsyncSuccess,
  deleteTodoItemAsync,
  deleteTodoItemAsyncError,
  deleteTodoItemAsyncSuccess,
  editTodoItemAsync,
  editTodoItemAsyncError,
  editTodoItemAsyncSuccess,
  fetchTodoListAsync,
  fetchTodoListAsyncError,
  fetchTodoListAsyncSucsess,
} from '../saga/todoSaga'

export const fetchTodoList = createAsyncThunk(
  'todoList/fetchTodoList',
  async (payload, thunkAPI) => {
    const response = await clientServer.get('todoItems')
    return response.data.reverse()
  },
)

// export const addTodoItemAsync = createAsyncThunk(
//   'todoList/addTodoItemAsync',
//   async (payload, thunkAPI) => {
//     console.log(payload)
//     const response = await clientServer.post('todoItems', payload)
//     thunkAPI.dispatch(fetchTodoList())
//     return response.data
//   },
// )

// export const updateTodoItemAsync = createAsyncThunk(
//   'todoList/updateTodoItemAsync',
//   async (payload, thunkAPI) => {
//     const response = await clientServer.patch(
//       `todoItems/${payload.id}`,
//       payload,
//     )
//     thunkAPI.dispatch(fetchTodoList())
//     return response.data
//   },
// )

// export const deleteTodoItemAsync = createAsyncThunk(
//   'todoList/deleteTodoItemAsync',
//   async (payload, thunkAPI) => {
//     console.log(payload.id)
//     const response = await clientServer.delete(
//       `todoItems/${payload.id}`,
//       payload,
//     )
//     thunkAPI.dispatch(fetchTodoList())
//     return response.data
//   },
// )

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    loading: false,
    loadingAddTodoItem: false,
    loadingUpdateTodoItem: false,
    loadingDeleteTodoItem: false,
    data: [],
    error: null,
    addTodoItemError: null,
  },
  reducers: {
    setTodoList: (state, action) => {
      state.data = action.payload
    },
    getTodoList: (state, action) => {},
  },
  extraReducers: (builder) => {
    /// Redux-saga
    builder.addCase(fetchTodoListAsync, (state, action) => {
      state.loading = true
    })

    builder.addCase(fetchTodoListAsyncSucsess.type, (state, action) => {
      state.loading = false
      state.data = action.payload
    })

    builder.addCase(fetchTodoListAsyncError.type, (state, action) => {
      state.loading = false
      state.error = action.error
    })

    // add todo action

    builder.addCase(addTodoItemAsync, (state, action) => {
      state.loadingAddTodoItem = true
    })

    builder.addCase(addTodoItemAsyncSuccess.type, (state, action) => {
      state.loadingAddTodoItem = false
    })

    builder.addCase(addTodoItemAsyncError.type, (state, action) => {
      state.loadingAddTodoItem = false
      state.error = action.error
    })

    // edit todo action

    builder.addCase(editTodoItemAsync, (state, action) => {
      state.loadingUpdateTodoItem = true
    })

    builder.addCase(editTodoItemAsyncSuccess.type, (state, action) => {
      state.loadingUpdateTodoItem = false
    })

    builder.addCase(editTodoItemAsyncError.type, (state, action) => {
      state.loadingUpdateTodoItem = false
      state.error = action.error
    })

    // delete todo item
    builder.addCase(deleteTodoItemAsync, (state, action) => {
      state.loadingDeleteTodoItem = true
    })

    builder.addCase(deleteTodoItemAsyncSuccess.type, (state, action) => {
      state.loadingDeleteTodoItem = false
    })

    builder.addCase(deleteTodoItemAsyncError.type, (state, action) => {
      state.loadingDeleteTodoItem = false
      state.error = action.error
    })

    /// Redux-thunk

    // // "todoList/fetchTodoList/pending" => Action type
    // builder.addCase(fetchTodoList.pending, (state, action) => {
    //   state.loading = true
    // })
    // // "todoList/fetchTodoList/fullfilled" => Action type
    // builder.addCase(fetchTodoList.fulfilled, (state, action) => {
    //   state.loading = false
    //   state.data = action.payload
    // })
    // // "todoList/fetchTodoList/rejected" => Action type
    // builder.addCase(fetchTodoList.rejected, (state, action) => {
    //   state.error = action.error
    //   state.loading = false
    // })
    // // "todoList/addTodoItemAsync/pending" => action type
    // builder.addCase(addTodoItemAsync.pending, (state, action) => {
    //   state.loadingAddTodoItem = true
    // })
    // // "todoList/addTodoItemAsync/fulfilled" => action type
    // builder.addCase(addTodoItemAsync.fulfilled, (state, action) => {
    //   state.loadingAddTodoItem = false
    //   // state.data = action.payload
    //   // fetchTodoList()
    // })

    // // "todoList/addTodoItemAsync/rejected" => action type
    // builder.addCase(addTodoItemAsync.rejected, (state, action) => {
    //   state.loadingAddTodoItem = false
    //   state.data = action.error
    //   // fetchTodoList()
    // })

    // // "todoList/updateTodoItemAsync/pending" => action type
    // builder.addCase(updateTodoItemAsync.pending, (state, action) => {
    //   state.loadingUpdateTodoItem = true
    // })
    // // "todoList/updateTodoItemAsync/fulfilled" => action type
    // builder.addCase(updateTodoItemAsync.fulfilled, (state, action) => {
    //   state.loadingUpdateTodoItem = false
    //   // state.data = action.payload
    //   // fetchTodoList()
    // })

    // // "todoList/updateTodoItemAsync/rejected" => action type
    // builder.addCase(updateTodoItemAsync.rejected, (state, action) => {
    //   state.loadingUpdateTodoItem = false
    //   state.data = action.error
    //   // fetchTodoList()
    // })

    // // "todoList/deleteTodoItemAsync/pending" => action type
    // builder.addCase(deleteTodoItemAsync.pending, (state, action) => {
    //   state.loadingDeleteTodoItem = true
    // })
    // // "todoList/deleteTodoItemAsync/fulfilled" => action type
    // builder.addCase(deleteTodoItemAsync.fulfilled, (state, action) => {
    //   state.loadingDeleteTodoItem = false
    //   // state.data = action.payload
    //   // fetchTodoList()
    // })

    // // "todoList/deleteTodoItemAsync/rejected" => action type
    // builder.addCase(deleteTodoItemAsync.rejected, (state, action) => {
    //   state.loadingDeleteTodoItem = false
    //   state.data = action.error
    //   // fetchTodoList()
    // })
  },
})

// Export reducer từ slice đã khai báo

export const { setTodoList } = todoListSlice.actions

export const todoListReducer = todoListSlice.reducer
