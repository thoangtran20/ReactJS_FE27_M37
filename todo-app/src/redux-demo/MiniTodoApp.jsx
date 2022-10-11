import TodoList from './components/todo-list/TodoList'
import './style.scss'

function MiniTodoApp() {
  return (
    <div className="MiniTodoApp">
      <h1 className="title">todo app</h1>
      <TodoList />
    </div>
  )
}

export default MiniTodoApp
