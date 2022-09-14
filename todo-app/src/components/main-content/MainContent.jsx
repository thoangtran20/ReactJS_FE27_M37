import TodoItemList from '../todo-item-list/TodoItemList'
import './MainContent.scss'
import AddNewForm from '../add-new-form/AddNewForm'
import { LIST_PAGE } from '../../const'

function MainContent(props) {
  const { page } = props

  return (
    <div className="main-content">
      {/* Conditional Rendering - Render có điều kiện */}
      {page === LIST_PAGE ? <TodoItemList /> : <AddNewForm />}
    </div>
  )
}

export default MainContent
