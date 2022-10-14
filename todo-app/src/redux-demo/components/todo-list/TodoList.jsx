import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../../redux/slice/todoSlice'
import AddNewForm from '../add-new-form/AddNewForm'
import './style.scss'

function TodoList() {
  const todoList = useSelector((state) => state.todoReducer.data)

  const dispatch = useDispatch()

  console.log(todoList)

  const handleDelete = (e, index) => {
    e.preventDefault()
    dispatch(deleteTodo(index))
  }

  return (
    <div className="TodoList">
      <AddNewForm />
      {todoList.map((item, index) => {
        return (
          <div className="todo-list-content">
            <div key={`${item}${index}`} className="todo-item-list">
              {item}
              <div
                onClick={(e) => handleDelete(e, index)}
                className="todo-item-delete"
              >
                X
              </div>  
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TodoList
