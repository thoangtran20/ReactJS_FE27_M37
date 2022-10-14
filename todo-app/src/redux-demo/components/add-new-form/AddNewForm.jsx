import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../../redux/slice/todoSlice'
import './style.scss'

function AddNewForm() {
  const dispatch = useDispatch()

  const [todoItem, setTodoItem] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(todoItem)
    dispatch(addNewTodo(todoItem))
  }
  return (
    <div className="AddNewForm">
      <input
        onChange={(e) => setTodoItem(e.target.value)}
        type="text"
        placeholder="Input todo item..."
        className="form-input"
      />
      <button
        onClick={onSubmit}
        disabled={!todoItem || todoItem === ''}
        className="btn-submit"
      >
        Submit
      </button>
    </div>
  )
}

export default AddNewForm
