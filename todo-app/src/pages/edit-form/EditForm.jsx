import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { localStorageKey, TASK_STATUS } from '../../const'
import { localStorageUtil } from '../../utils'
import './style.scss'

function EditForm() {
  const { set, get } = localStorageUtil(localStorageKey.todoItems, [])
  // lấy param từ url
  const { id, status } = useParams()
  const navigate = useNavigate()

  /// state
  const [todoItem, setTodoItem] = useState({
    id: '',
    title: '',
    creator: '',
    status: '',
    description: '',
  })

  const [defaultValue, setDefaultValue] = useState({
    id: '',
    title: '',
    creator: '',
    status: '',
    description: '',
  })

  // componentDidMount => 
  useEffect(() => {
    // lấy list từ local storage
    const list = JSON.parse(get())
    // tìm item cần chỉnh sửa
    const item = list.find((item) => item.id === id)
    console.log(item)
    // lưu trữ giá trị vào state
    setTodoItem(item)
    setDefaultValue(item);
  }, [id])

  // e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(todoItem)
    const list = JSON.parse(get())
    const newList = list.map((item) => {
      if (item.id === todoItem.id) return todoItem
      return item
    })
    set([...newList])
    // Chuyển về trang trước đó
    navigate(-1)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    const list = JSON.parse(get())
    // tìm vị trí
    const index = list.findIndex((item) => item.id === todoItem.id)
    console.log(index)
    // xóa khỏi mảng
    list.splice(index, 1)
    // Set Local storage
    set(list)
    // Trở về trang truóc
    navigate(-1)
  }

  const handleDeleteFilter = (e) => {
    e.preventDefault();
    const list = JSON.parse(get());
    const newList = list.filter((item) => item.id !== todoItem.id);
    set(newList);
    navigate(-1);
  }

  const handleReset = (e) => {
    e.preventDefault();
    setTodoItem(defaultValue);
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
            checked={todoItem.status === TASK_STATUS.new}
            type="radio"
            value={TASK_STATUS.new}
            name="status"
            className="form-radio"
          />
          New
          <input
            checked={todoItem.status === TASK_STATUS.doing}
            type="radio"
            value={TASK_STATUS.doing}
            name="status"
            className="form-radio"
          />
          Doing
          <input
            checked={todoItem.status === TASK_STATUS.done}
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
        <button onClick={handleDeleteFilter} className="btn-delete">
          Delete
        </button>
        <button onClick={handleReset} className="btn-reset">
          Reset
        </button>
      </div>
    </div>
  )
}

export default EditForm
