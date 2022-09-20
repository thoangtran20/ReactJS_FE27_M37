import './TodoItemList.scss'
import { TodoItemFunction } from '../../components/todo-item/TodoItem';

export const Pagination = () => {}

// const TodoList = [
//   {
//     title: 'task 1',
//     creator: 'Thoang',
//     status: 'New',
//     description: 'This is task 1',
//   },
//   {
//     title: 'task 2',
//     creator: 'Thoang',
//     status: 'Doing',
//     description: 'This is task 2',
//   },
//   {
//     title: 'task 3',
//     creator: 'Thoang',
//     status: 'Done',
//     description: 'This is task 3',
//   },
//   {
//     title: 'task 3',
//     creator: 'Thoang',
//     status: 'Done',
//     description: 'This is task 3',
//   },
//   {
//     title: 'task 3',
//     creator: 'Thoang',
//     status: 'Done',
//     description: 'This is task 3',
//   },
//   {
//     title: 'task 3',
//     creator: 'Thoang',
//     status: 'Done',
//     description: 'This is task 3',
//   },
//   {
//     title: 'task 3',
//     creator: 'Thoang',
//     status: 'Done',
//     description: 'This is task 3',
//   },
//   {
//     title: 'task 3',
//     creator: 'Thoang',
//     status: 'Done',
//     description: 'This is task 3',
//   },
//   {
//     title: 'task 3',
//     creator: 'Thoang',
//     status: 'Done',
//     description: 'This is task 3',
//   },
//   {
//     title: 'task 3',
//     creator: 'Thoang',
//     status: 'Done',
//     description: 'This is task 3',
//   },
//   {
//     title: 'task 3',
//     creator: 'Thoang',
//     status: 'Done',
//     description: 'This is task 3',
//   },
//   {
//     title: 'task 3',
//     creator: 'Thoang',
//     status: 'Done',
//     description: 'This is task 3',
//   },
// ]

const TodoItemList = (props) => {
  const { data } = props;
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
          />
        )
      })}
    </div>
  )
}

export default TodoItemList