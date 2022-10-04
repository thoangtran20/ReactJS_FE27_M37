import { useState } from "react";
import { useEffect } from "react";
import { localStorageKey } from "../../const";
import { localStorageUtil } from "../../utils";
import { TodoItemFunction } from "../todo-item/TodoItem";

export const Pagination = () => {}

const TodoItemList = (props) => {
  const { get } = localStorageUtil(localStorageKey.todoItems, [])
  const [todoListData, setTodoListData] = useState([])

  // Callback o tham so thu nhat se chay khi state/props thay doi
  useEffect(() => {});

  // Component Life Cycle: hoat dong tuong tu componentDidMount
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
  // Thuong dung de bien doi du lieu dau vao
  useEffect(() => {
    const newList = props.externalListData.map((item) => ({
      ...item,
      title: item.name,
    }));

    setTodoListData(newList);
  }, [props.externalListData, todoListData]);

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