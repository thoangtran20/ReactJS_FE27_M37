import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { localStorageKey, TASK_STATUS } from '../../const'
import { localStorageUtil } from '../../utils'
import './style.scss'

function EditForm() {
  const { set, get } = localStorageUtil(localStorageKey.todoItems, [])
  const { id } = useParams()

  const [todoItem, setTodoItem] = useState({
    id: '',
    title: '',
    creator: '',
    status: '',
    description: '',
  })

  useEffect(() => {
    const list = JSON.parse(get())
    const item = list.find((item) => item.id === id)
    console.log(item)
    setTodoItem(item)
  }, [id])

  // e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <h1>EDIT FORM</h1>
      <form action="" className="EditForm">
        <div className="form-row">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            value={todoItem.title}
            onChange={(e) => {
              setTodoItem({
                ...todoItem,
                title: e.target.value,
              })
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
            value={todoItem.creator}
            onChange={(e) => {
              setTodoItem({
                ...todoItem,
                creator: e.target.value,
              })
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
            value={todoItem.description}
            onChange={(e) => {
              setTodoItem({
                ...todoItem,
                description: e.target.value,
              })
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
            setTodoItem({
              ...todoItem,
              status: e.target.value,
            })
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

export default EditForm
