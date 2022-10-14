import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    data: [],
  },
  reducers: {
    getTodoList: (state, action) => {},
    addNewTodo: (state, action) => {
      console.log(action.type)
      console.log(action.payload)
      // Gán trực tiếp giá trị mới vào state.data
      // thực sự thì đây nhìn giống như 1 phép gán nhưng redux/toolkit
      // đã xử lý phần copy data để không bị trùng vùng nhớ
      state.data = [action.payload, ...state.data]
    },
    updateTodoItem: (state, action) => {},
    deleteTodo: (state, action) => {
      const newList = [...state.data]
      newList.splice(action.payload, 1)
      console.log(action.payload)
      state.data = (newList)
    },
  },
})

export const {
  getTodoList,
  addNewTodo,
  updateTodoItem,
  deleteTodo,
} = todoSlice.actions

export const todoReducer = todoSlice.reducer
