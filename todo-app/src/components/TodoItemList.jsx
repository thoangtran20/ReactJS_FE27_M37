import './TodoItemList.scss'
import { TodoItemClass, TodoItemFunction } from './TodoItem'

export const Pagination = () => {}

const TodoList = [
  {
    title: 'task 1',
    creator: 'Thoang',
    status: 'New',
    description: 'This is task 1',
  },
]

const TodoItemList = () => {
  return (
    <div className="todo-item-list">
      <TodoItemFunction
        title={'Học bài'}
        creator={'Mẹ'}
        status={'New'}
        description={'Học bài trước khi ngủ'}
      />
      <TodoItemClass
        title={'Ăn cơm'}
        creator={'Mẹ'}
        status={'New'}
        description={'Ăn cơm trước 12h'}
      />
      <TodoItemFunction
        title={TodoList[0].title}
        creator={TodoList[0].creator}
        status={TodoList[0].status}
        description={TodoList[0].description}
      />
      <TodoItemFunction
        title={'Tập thể dục'}
        creator={'Anh hai'}
        status={'Doing'}
        description={'Tập thể dục lúc 5h'}
      />
      <TodoItemFunction
        title={'Ăn sáng'}
        creator={'Mẹ'}
        status={'Doing'}
        description={'Ăn sáng trước 8h'}
      />
      <TodoItemFunction
        title={'Lau nhà'}
        creator={'Mẹ'}
        status={'Done'}
        description={'Lau nhà trước khi ăn com'}
      />
      <TodoItemClass />
      <TodoItemClass />
      <TodoItemClass />
      <TodoItemClass />
      <TodoItemClass />
      <TodoItemClass />
      <TodoItemClass />
      <TodoItemClass />
      <TodoItemClass />
    </div>
  )
}

export default TodoItemList
