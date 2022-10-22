import { useEffect, useState } from 'react'
// import { observer } from 'mobx-react'
import { Route, Routes } from 'react-router'
import './App.css'
import { ROUTE, TASK_STATUS } from './const'
import { TodoListContext } from './context/TodoListContext'
import MainLayout from './layout/MainLayout'
import AddNewForm from './pages/add-new-form/AddNewForm'
import EditForm from './pages/edit-form/EditForm'
import TodoItemList from './pages/todo-item-list/TodoItemList'
import { clientServer } from './server/clientServer'
import { useDispatch, useSelector } from 'react-redux'
// import {
//   addNewTodo,
//   getTodoList,
//   setTodoList,
// } from './redux-demo/redux/slice/todoSlice'

// import {
//   addTodoItemAsync,
//   deleteTodoItemAsync,
//   fetchTodoList,
//   setTodoList,
//   updateTodoItemAsync,
// } from './redux/slice/todoListSlice'
import { fetchTodoListAsync } from './redux/saga/todoSaga'
// import { todoStore } from './mobx-store/TodoItemStore'

const App = () => {
  // const [todoList] = useState([])
  // const { get, set } = localStorageUtil(localStorageKey.todoItems, [])

  const todoList = useSelector((state) => state.todoListReducer.data)
  console.log(todoList)

  // Tạo ra hàm dùng để đẩy action lên redux-store
  const dispatch = useDispatch()

  // const setTodoList = dispatch(todoListSlice.setTodoList())

  // console.log(todoListStore.todoItemsCount)
  // console.log(todoListStore.getTodoItems())

  // const setTodoList = (todoList) => {
  //   todoListStore.setTodoItems(todoList)
  // }

  // const todoList = todoListStore.getTodoItems()

  // useEffect(() => {
  //   todoListStore.fetchTodoItem()
  // }, [])

  // componentDidMount:
  useEffect(() => {
    dispatch(fetchTodoListAsync())
    // fetchTodoItem()
  }, [])

  // const fetchTodoItem = () => {
  //   clientServer
  //     .get('todoItems')
  //     .then((res) => {
  //       dispatch(setTodoList(res.data ?? []))
  //     })
  //     .catch((e) => {
  //       console.log('error: ', e)
  //     })
  // }

  const handleAddItem = (newTask) => {
    // Server
    // clientServer
    //   .post('todoItems', newTask)
    //   .then((res) => {
    //     console.log(res)
    //     dispatch(fetchTodoList())
    //   })
    //   .catch((err) => {
    //     console.log('error: ', err)
    //   })
    // Redux
    // console.log(newTask)
    // const list = dispatch(addTodoItemAsync(newTask))
    // console.log(list)
    // dispatch(fetchTodoList(list))
    // dispatch(setTodoList(newList))
  }

  const handleUpdateItem = (updatedTask) => {
    // Server
    // clientServer
    //   .patch(`todoItems/${updatedTask.id}`, updatedTask)
    //   .then((res) => {
    //     console.log(res)
    //     dispatch(fetchTodoList())
    //   })
    //   .catch((err) => {
    //     console.log('error: ', err)
    //   })
    // Redux
    // console.log(updatedTask)
    // dispatch(updateTodoItemAsync(updatedTask))
  }

  const handleDeleteItem = (deletedItem) => {
    // Server
    // clientServer
    //   .delete(`todoItems/${deletedItem.id}`, deletedItem)
    //   .then((res) => {
    //     console.log(res)
    //     dispatch(fetchTodoList())
    //   })
    //   .catch((err) => {
    //     console.log('error: ', err)
    //   })
    // Redux
    // console.log(deletedItem)
    // dispatch(deleteTodoItemAsync(deletedItem))
  }

  console.log(todoList)

  return (
    <TodoListContext.Provider
      value={{
        data: todoList,
        addItem: handleAddItem,
        updateItem: handleUpdateItem,
        deleteItem: handleDeleteItem,
      }}
    >
      <div className="App">
        <Routes>
          <Route
            path={ROUTE.all}
            element={<MainLayout content={<TodoItemList />} />}
          />
          <Route
            path={ROUTE.new}
            element={
              <MainLayout content={<TodoItemList status={TASK_STATUS.new} />} />
            }
          />
          <Route
            path={ROUTE.doing}
            element={
              <MainLayout
                content={<TodoItemList status={TASK_STATUS.doing} />}
              />
            }
          />
          <Route
            path={ROUTE.done}
            element={
              <MainLayout
                content={<TodoItemList status={TASK_STATUS.done} />}
              />
            }
          />
          <Route
            path={ROUTE.addNew}
            element={<MainLayout content={<AddNewForm />} />}
          />
          <Route
            path={`${ROUTE.editForm}/:id`}
            element={<MainLayout content={<EditForm />} />}
          />
        </Routes>
      </div>
    </TodoListContext.Provider>
  )
}

export default App
