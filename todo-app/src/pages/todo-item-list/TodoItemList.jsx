import './TodoItemList.scss'
import { TodoItemFunction } from '../../components/todo-item/TodoItem'
import { useContext } from 'react'
import { TodoListContext } from '../../context/TodoListContext'


export const Pagination = () => {}

const TodoItemList = () => {
  const { data } = useContext(TodoListContext);
  console.log(data);


  return (
    <div className="todo-item-list">
      {data.map((item, index) => {
        return (
          <TodoItemFunction
            key={index}
            title={item.title}
            creator={item.creator}
            status={item.status}
            description={item.description}
            id={item.id}
          />
        )
      })}
    </div>
  )
}

export default TodoItemList

