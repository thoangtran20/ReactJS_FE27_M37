import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { localStorageKey, ROUTE } from './const'
import { TodoListContext } from './context/TodoListContext'
import MainLayout from './layout/MainLayout'
import AddNewForm from './pages/add-new-form/AddNewForm'
import EditForm from './pages/edit-form/EditForm'
import TodoItemList from './pages/todo-item-list/TodoItemList'
import { localStorageUtil } from './utils'
// import StateDemo from './components/state-demo/StateDemo'
// import MainLayout from './layout/MainLayout'

function App() {
  const [todoList, setTodoList] = useState([])
  const { get, set } = localStorageUtil(localStorageKey.todoItems, [])

  const handleAddItem = (newTask) => {
    const oldList = JSON.parse(get())
    const newList = [newTask, ...oldList]
    setTodoList(newList)
    set(newList)
  }

  const handleUpdateItem = (todoItem) => {
    const list = JSON.parse(get())
    const newList = list.map((item) => {
      if (item.id === todoItem.id) return todoItem
      return item
    })
    setTodoList(newList)
    set([...newList])
  }

  const handleDeleteItem = (todoItem) => {
    const list = JSON.parse(get())
    // tìm vị trí
    const index = list.findIndex((item) => item.id === todoItem.id)
    console.log(index)
    // xóa khỏi mảng
    list.splice(index, 1)
    // Set Local storage
    setTodoList(list)
    set(list)
  }

  useEffect(() => {
    const listFromLocalStorage = JSON.parse(get())
    console.log(listFromLocalStorage)
    setTodoList(listFromLocalStorage)
  }, [])

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
            element={<MainLayout content={<TodoItemList data={[]} />} />}
          />
          <Route
            path={ROUTE.new}
            element={<MainLayout content={<TodoItemList data={[]} />} />}
          />
          <Route
            path={ROUTE.doing}
            element={<MainLayout content={<TodoItemList data={[]} />} />}
          />
          <Route
            path={ROUTE.done}
            element={<MainLayout content={<TodoItemList data={[]} />} />}
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
        {/* <MainLayout /> */}
        {/* <StateDemo /> */}
      </div>
    </TodoListContext.Provider>
  )
}

export default App
