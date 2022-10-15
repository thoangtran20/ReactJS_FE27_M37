import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ROUTE, TASK_STATUS } from '../../const'
import { TodoListContext } from '../../context/TodoListContext'
import { clientServer } from '../../server/clientServer'
import './style.scss'

function EditForm() {
  const { data } = useContext(TodoListContext)

  // const { set, get } = localStorageUtil(localStorageKey.todoItems, [])
  const { updateItem, deleteItem } = useContext(TodoListContext)
  // lấy param từ url
  const { id } = useParams()
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
    clientServer
      .get(`todoItems/${id}`)
      .then((res) => {
        setTodoItem(res.data)
        setDefaultValue(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  // e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault()
    updateItem(todoItem)
    // Chuyển về trang trước đó
    navigate(ROUTE.all)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteItem(todoItem)
    // Trở về trang truóc
    navigate(ROUTE.all)
  }

  // const handleDeleteFilter = (e) => {
  //   e.preventDefault();
  //   const list = JSON.parse(get());
  //   const newList = list.filter((item) => item.id !== todoItem.id);
  //   set(newList);
  //   navigate(-1);
  // }

  const handleReset = (e) => {
    e.preventDefault()
    setTodoItem(defaultValue)
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
        <button onClick={handleDelete} className="btn-delete">
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
