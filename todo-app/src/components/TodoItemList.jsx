import './TodoItemList.scss'
import { TodoItem } from './TodoItem'

const TodoItemList = () => {
  return (
    <div className="todo-item-list">
      <TodoItem />
      <TodoItem />
      <TodoItem /> 
      <TodoItem /> 
      <TodoItem /> 
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default TodoItemList;
