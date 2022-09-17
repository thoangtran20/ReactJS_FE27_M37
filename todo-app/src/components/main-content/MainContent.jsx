import TodoItemList from '../todo-item-list/TodoItemList'
import './MainContent.scss'
import AddNewForm from '../add-new-form/AddNewForm'
import { LIST_PAGE } from '../../const'
import { useState } from 'react'

function MainContent(props) {
  const [todoListData, setTodoListData] = useState([])

  const { page } = props

  const handleFormSubmit = (newTask) => {
    console.log(newTask)
    setTodoListData([newTask, ...todoListData])
  }

  return (
    <div className="main-content">
      {/* Conditional Rendering - Render có điều kiện */}
      {page === LIST_PAGE ? (
        <TodoItemList data={todoListData} />
      ) : (
        <AddNewForm handleFormSubmit={handleFormSubmit} />
      )}
    </div>
  )
}

export default MainContent
