import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { Route, Routes } from 'react-router'
import './App.css'
import { ROUTE, TASK_STATUS } from './const'
import { TodoListContext } from './context/TodoListContext'
import MainLayout from './layout/MainLayout'
import AddNewForm from './pages/add-new-form/AddNewForm'
import EditForm from './pages/edit-form/EditForm'
import TodoItemList from './pages/todo-item-list/TodoItemList'
import { clientServer } from './server/clientServer'
import { todoStore } from './mobx-store/TodoItemStore'
// import StateDemo from './components/state-demo/StateDemo'
// import MainLayout from './layout/MainLayout'

function App({ todoListStore }) {
  // const [todoList, setTodoList] = useState([])
  // const { get, set } = localStorageUtil(localStorageKey.todoItems, [])

  console.log(todoListStore.todoItemsCount)
  console.log(todoListStore.getTodoItems())

  const setTodoList = (todoList) => {
    todoStore.setTodoItems(todoList)
  }

  const todoList = todoStore.getTodoItems()

  useEffect(() => {
    fetchTodoItem()

    // const listFromLocalStorage = JSON.parse(get())
    // console.log(listFromLocalStorage)
    // setTodoList(listFromLocalStorage)
  }, [])

  const fetchTodoItem = () => {
    clientServer
      .get('todoItems')
      .then((res) => {
        setTodoList((res.data ?? []).reverse())
      })
      .catch((e) => {
        console.log('error: ', e)
      })
  }

  const handleAddItem = (newTask) => {
    clientServer
      .post('todoItems', newTask)
      .then((res) => {
        console.log(res)
        fetchTodoItem()
      })
      .catch((err) => {
        console.log('error: ', err)
      })

    // const oldList = JSON.parse(get())
    // const newList = [newTask, ...oldList]
    // setTodoList(newList)
    // set(newList)
  }

  const handleUpdateItem = (updatedTask) => {
    clientServer
      .patch(`todoItems/${updatedTask.id}`, updatedTask)
      .then((res) => {
        console.log(res)
        fetchTodoItem()
      })
      .catch((err) => {
        console.log('error: ', err)
      })

    // const list = JSON.parse(get())
    // const newList = list.map((item) => {
    //   if (item.id === todoItem.id) return todoItem
    //   return item
    // })
    // setTodoList(newList)
    // set([...newList])
  }

  const handleDeleteItem = (deletedItem) => {
    clientServer
      .delete(`todoItems/${deletedItem.id}`, deletedItem)
      .then((res) => {
        console.log(res)
        fetchTodoItem()
      })
      .catch((err) => {
        console.log('error: ', err)
      })

    // const list = JSON.parse(get())
    // // tìm vị trí
    // const index = list.findIndex((item) => item.id === todoItem.id)
    // console.log(index)
    // // xóa khỏi mảng
    // list.splice(index, 1)
    // // Set Local storage
    // setTodoList(list)
    // set(list)
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
        {/* <MainLayout /> */}
        {/* <StateDemo /> */}
      </div>
    </TodoListContext.Provider>
  )
}

export default observer(() => <App todoListStore={todoStore} />)
