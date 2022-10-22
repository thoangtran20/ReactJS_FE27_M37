import { createAction } from '@reduxjs/toolkit'
import { clientServer } from '../../server/clientServer'
import { put, takeEvery } from 'redux-saga/effects'

// fetch todo
export const fetchTodoListAsync = createAction('todoList/fetchTodoList')
export const fetchTodoListAsyncSucsess = createAction(
  'todoList/fetchTodoList/sucsess',
)
export const fetchTodoListAsyncError = createAction(
  'todoListReducer/fetchTodoList/error',
)

// addTodo
export const addTodoItemAsync = createAction('todoList/addTodoItemAsync')
export const addTodoItemAsyncSuccess = createAction(
  'todoList/addTodoItemAsync/success',
)

export const addTodoItemAsyncError = createAction(
  'todoList/addTodoItemAsync/error',
)

// editTodo
export const editTodoItemAsync = createAction('todoList/editTodoItemAsync')
export const editTodoItemAsyncSuccess = createAction(
  'todoList/editTodoItemAsync/success',
)
export const editTodoItemAsyncError = createAction(
  'todoList/editTodoItemAsync/error',
)

// deleteTodo
export const deleteTodoItemAsync = createAction('todoList/deleteTodoItemAsync')
export const deleteTodoItemAsyncSuccess = createAction(
  'todoList/deleteTodoItemAsync/success',
)
export const deleteTodoItemAsyncError = createAction(
  'todoList/deleteTodoItemAsync/error',
)

// Worker saga
function* fetchTodo() {
  try {
    const todoList = yield clientServer.get('todoItems')
    yield put(fetchTodoListAsyncSucsess(todoList.data.reverse()))
    console.log(todoList.data)
  } catch (error) {
    yield put(fetchTodoListAsyncError(error))
    console.log(error)
  }
}

function* addTodoItem(action) {
  try {
    yield clientServer.post('todoItems', action.payload)
    yield put(fetchTodoListAsync())
    yield put(addTodoItemAsyncSuccess())
  } catch (error) {
    yield put(addTodoItemAsyncError(error))
  }
}

function* editTodoItem(action) {
  try {
    yield clientServer.patch(`todoItems/${action.payload.id}`, action.payload)
    yield put(fetchTodoListAsync())
    yield put(editTodoItemAsyncSuccess())
  } catch (error) {
    yield put(editTodoItemAsyncError(error))
  }
}

function* deleteTodoItem(action) {
  try {
    yield clientServer.delete(`todoItems/${action.payload.id}`, action.payload)
    yield put(fetchTodoListAsync())
    yield put(deleteTodoItemAsyncSuccess())
  } catch (error) {
    yield put(deleteTodoItemAsyncError(error))
  }
}

// Watcher saga làm nhiệm vụ điều phối, thẻo dõi
export function* watchTodoSaga() {
  yield takeEvery(fetchTodoListAsync, fetchTodo) // Khi action fetchTodoListAsync được dispatch qua thì gọi hàm fetchTodo
  yield takeEvery(addTodoItemAsync, addTodoItem) // Khi action addTodoItemAsync được dispatch qua thì gọi hàm addTodoItem
  yield takeEvery(editTodoItemAsync, editTodoItem) // Khi action editTodoItemAsync được dispatch qua thì gọi hàm editTodoItem
  yield takeEvery(deleteTodoItemAsync, deleteTodoItem) // Khi action deleteTodoItemAsync được dispatch qua thì gọi hàm deleteTodoItem
}
