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
import { useDispatch, useSelector } from 'react-redux'
import { getTodoList, setTodoList } from './redux-demo/redux/slice/todoSlice'
// import { todoStore } from './mobx-store/TodoItemStore'

const App = () => {
  // const [todoList, setTodoList] = useState([])
  // const { get, set } = localStorageUtil(localStorageKey.todoItems, [])

  const todoList = useSelector((state) => state.todoReducer.data)
  console.log(todoList);

  const dispatch = useDispatch()



  // console.log(todoListStore.todoItemsCount)
  // console.log(todoListStore.getTodoItems())

  // const setTodoList = (todoList) => {
  //   todoListStore.setTodoItems(todoList)
  // }

  // const todoList = todoListStore.getTodoItems()

  // useEffect(() => {
  //   todoListStore.fetchTodoItem()
  // }, [])

  useEffect(() => {
    fetchTodoItem()
  }, [])

  const fetchTodoItem = () => {
    clientServer
      .get('todoItems')
      .then((res) => {
        dispatch(setTodoList(res.data ?? []))
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
  }

  const handleDeleteItem = (deletedItem) => {
    clientServer
      .delete(`todoItems/${deletedItem.id}`, deletedItem)
      .then((res) => {
        console.log(res)
        fetchTodoItem()()
      })
      .catch((err) => {
        console.log('error: ', err)
      })
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
