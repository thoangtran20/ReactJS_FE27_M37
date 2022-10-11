import AddNewForm from '../add-new-form/AddNewForm'
import './style.scss'

function TodoList() {
  return (
    <div className="TodoList">
      <AddNewForm />
      <div className="content">
        <div className="item">Todo 1</div>
        <div className="item">Todo 2</div>
        <div className="item">Todo 3</div>
        <div className="item">Todo 4</div>
      </div>
    </div>
  )
}

export default TodoList
