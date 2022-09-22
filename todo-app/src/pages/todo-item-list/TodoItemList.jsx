import './TodoItemList.scss'
import { TodoItemFunction } from '../../components/todo-item/TodoItem'
import { useState } from 'react'
import { useEffect } from 'react'
import { localStorageUtil } from '../../utils'
import { localStorageKey } from '../../const'

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
  const { get } = localStorageUtil(localStorageKey.todoItems, [])
  const [todoListData, setTodoListData] = useState([])

  // Callback o tham so thu nhat se chay khi state/props thay doi
  useEffect(() => {

  });

  // Component Life Cycle: goat dong tuong tu componentDidMount
  useEffect(() => {
    const list = JSON.parse(get())
    setTodoListData(list);

    // componentWillUnmount: la ham tra ve trong 'componentWillUnmount'
    return () => {
      // Dung 1 subscription
      // Dung theo doi 1 socket
      // Dung setInterval
      // Dung setTimeout
    }
  }, [])

  // componentDidUpdate: Khi bat khi element nao trong arr dependency thay doi thu callback se duoc goi
  // Thuong dung de bine doi du lieu dau vao

  // useEffect(() => {
  //   const newList = props.externalListData.map((item) => ({
  //     ...item,
  //     title: item.name,
  //   }));

  //   setTodoListData(newList);
  // }, [props.externalListData, todoListData]);

  return (
    <div className="todo-item-list">
      {todoListData.map((item, index) => {
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

