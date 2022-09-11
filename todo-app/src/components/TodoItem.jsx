// This is also component
import './TodoItem.scss'

export const TodoItem = () => {
  return (
    <div className="todo-item">
      <p className="todo-item-title">Title: Task 1</p>
      <p className="todo-item-creator">Creator: Thoang</p>
      <p className="todo-item-status">Status: New</p>
      <hr className="todo-item-divider" />
      <p className="todo-item-description">
        <span>Description: </span>
        <br />
        <p>
          This is a task, This is a Task, This is a Task, This is a Task, This
          is a ...
        </p>
      </p>
    </div>
  )
}
