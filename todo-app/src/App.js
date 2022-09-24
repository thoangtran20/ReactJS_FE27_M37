import { Route, Routes, useParams } from 'react-router'
import './App.css'
import { ROUTE } from './const'
import MainLayout from './layout/MainLayout'
import AddNewForm from './pages/add-new-form/AddNewForm'
import EditForm from './pages/edit-form/EditForm'
import TodoItemList from './pages/todo-item-list/TodoItemList'
// import StateDemo from './components/state-demo/StateDemo'
// import MainLayout from './layout/MainLayout'

function App() {
  
  return (
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
          path={`${ROUTE.editForm}/:id/:status`}
          element={<MainLayout content={<EditForm />} />}
        />
      </Routes>
      {/* <MainLayout /> */}
      {/* <StateDemo /> */}
    </div>
  )
}

export default App
