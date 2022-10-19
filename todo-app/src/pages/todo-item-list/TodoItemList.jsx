import './TodoItemList.scss'
import { TodoItemFunction } from '../../components/todo-item/TodoItem'
import { usePagination, useTodoItemList } from './hook'
import { ITEM_PER_PAGE } from '../../const'
import Pagination from '../../components/pagination/Pagination'
import { useSelector } from 'react-redux'

const TodoItemList = (props) => {
  const loading = useSelector((state) => state.todoListReducer.loading)

  let { currentData } = useTodoItemList(props.status)
  const { jumpPage, dataPerPage, currentPage, maxPage } = usePagination(
    currentData,
    ITEM_PER_PAGE,
  )

  return (
    <div className="todo-item-list-container">
      {loading && <div>Loading Todo Item</div>}
      <div className="todo-item-list">
        {dataPerPage.map((item, index) => {
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

      <Pagination
        currentPage={currentPage}
        jumpPage={jumpPage}
        maxPage={maxPage}
      />
    </div>
  )
}

export default TodoItemList
