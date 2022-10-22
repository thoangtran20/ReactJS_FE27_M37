import { useContext, useState } from 'react'
import { localStorageKey, ROUTE, TASK_STATUS } from '../../const'
import { localStorageUtil } from '../../utils'
import { v4 as uuidv4 } from 'uuid'
import './style.scss'
import { TodoListContext } from '../../context/TodoListContext'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { addTodoItem, addTodoItemAsync } from '../../redux/saga/todoSaga'
// import { addTodoItemAsync } from '../../redux/slice/todoListSlice'

function AddNewForm() {
  const navigate = useNavigate()
  // const { addItem } = useContext(TodoListContext)
  const dispatch = useDispatch()
  const { set, get } = localStorageUtil(localStorageKey.todoItems, [])

  const [title, setTitle] = useState()
  const [creator, setCreator] = useState()
  const [status, setStatus] = useState()
  const [description, setDescription] = useState()

  // e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      title,
      creator,
      status,
      description,
      id: uuidv4(),
    }
    // addItem(newTask);
    dispatch(addTodoItemAsync(newTask))
    navigate(ROUTE.all)
  }

  return (
    <div className="container">
      <h1>ADD NEW FORM</h1>
      <form action="" className="form-container">
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            type="text"
            placeholder="Type title"
            name="title"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Creator
          </label>
          <input
            onChange={(e) => {
              setCreator(e.target.value)
            }}
            type="text"
            placeholder="Name of creator"
            name="title"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <input
            onChange={(e) => {
              setDescription(e.target.value)
            }}
            type="text"
            placeholder="Description Details"
            name="title"
            className="form-input"
          />
        </div>
        <div
          className="form-row"
          onChange={(e) => {
            setStatus(e.target.value)
          }}
        >
          <label htmlFor="" className="form-label">
            Status
          </label>
          <input
            type="radio"
            value={TASK_STATUS.new}
            name="status"
            className="form-radio"
          />
          New
          <input
            type="radio"
            value={TASK_STATUS.doing}
            name="status"
            className="form-radio"
          />
          Doing
          <input
            type="radio"
            value={TASK_STATUS.done}
            name="status"
            className="form-radio"
          />
          Done
        </div>
      </form>
      <div>
        <button onClick={handleSubmit} className="btn-save">
          Save
        </button>
      </div>
    </div>
  )
}

export default AddNewForm
