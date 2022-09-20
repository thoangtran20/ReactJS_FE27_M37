import { useState } from 'react'
import { localStorageKey, TASK_STATUS } from '../../const'
import { localStorageUtil } from '../../utils'
import './style.scss'

function AddNewForm(props) {
  const { set, get } = localStorageUtil(localStorageKey.todoItems, [])
  // const { handleFormSubmit } = props

  const [title, setTitle] = useState()
  const [creator, setCreator] = useState()
  const [status, setStatus] = useState()
  const [description, setDescription] = useState()

  // console.log(creator)
  // console.log(title)
  // console.log(status)
  // console.log(description)

  // e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      title,
      creator,
      status,
      description,
    }
    const oldList = JSON.parse(get());
    set([newTask, ...oldList]);
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
        {/* <div className="form-row">
          <label htmlFor="" className="form-label">
            Status
          </label>
          <input
            onChange={(e) => {
              setStatus(e.target.value)
            }}
            type="text"
            placeholder="Status"
            name="title"
            className="form-input"
          />
        </div> */}
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
