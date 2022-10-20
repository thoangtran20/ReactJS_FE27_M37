import { createAction } from '@reduxjs/toolkit'
import { clientServer } from '../../server/clientServer'
import { takeEvery } from 'redux-saga/effects'

// fetch todo
export const fetchTodoListAsync = createAction('todoList/fetchTodoList')
export const fetchTodoListAsyncSucess = createAction(
  'todoList/fetchTodoList/sucess',
)
export const fetchTodoListAsyncError = createAction(
  'todoListReducer/fetchTodoList/error',
)

// addTodo
const addTodoItemAsync = createAction('todoList/addTodoItemAsync')

// editTodo
const editTodoItemAsync = createAction('todoList/editTodoItemAsync')

// deleteTodo
const deleteTodoItemAsync = createAction('todoList/deleteTodoItemAsync')

// Worker saga
function* fetchTodo() {
  try {
    const todoList = yield clientServer.get('todoItems')
    console.log(todoList.data)
  } catch (error) {
    console.log(error)
  }
}

function* addTodoItem() {}

function* editTodoItem() {}

function* deleteTodoItem() {}

// Watcher saga làm nhiệm vụ điều phối
export function* todoSaga() {
  yield takeEvery(fetchTodoListAsync, fetchTodo) // Khi action fetchTodoListAsync được dispatch qua thì gọi hàm fetchTodo
  yield takeEvery(addTodoItemAsync, addTodoItem) // Khi action addTodoItemAsync được dispatch qua thì gọi hàm addTodoItem
  yield takeEvery(editTodoItemAsync, editTodoItem)
  yield takeEvery(deleteTodoItemAsync, deleteTodoItem)
}
