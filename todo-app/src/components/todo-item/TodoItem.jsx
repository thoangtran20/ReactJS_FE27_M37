// This is also component
import { Component } from 'react'
import { useNavigate } from 'react-router'
import { ROUTE } from '../../const';
import './TodoItem.scss'

// Funtional Component
// Props is 'object' chứa các thuộc tính của component

export const TodoItemFunction = (props) => {
  const navigate = useNavigate();
  
  const goToEditForm = () => {
    navigate(`${ROUTE.editForm}/${props.id}`);
  }

  return (
    <div className="todo-item" onClick={goToEditForm}>
      <p className="todo-item-title">Title: {props.title}</p>
      <p className="todo-item-creator">Creator: {props.creator}</p>
      <p className="todo-item-status">Status: {props.status}</p>
      <hr className="todo-item-divider" />
      <p className="todo-item-description">
        <span>Description: </span>
        <br />
        <p>{props.description}</p>
      </p>
    </div>
  )
}

export class TodoItemClass extends Component {
  render() {
    return (
      <div className="todo-item">
        <p className="todo-item-title">Title: {this.props.title}</p>
        <p className="todo-item-creator">Creator: {this.props.creator}</p>
        <p className="todo-item-status">Status: {this.props.status}</p>
        <hr className="todo-item-divider" />
        <p className="todo-item-description">
          <span>Description: </span>
          <br />
          <p>{this.props.description}</p>
        </p>
      </div>
    )
  }
}

// export default TodoItem;

// class Person {
//   // Thuoc tinh: ten, tuoi, ...
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   run() {
//     console.log(`${this.name} dang chay`)
//   }

//   sleep() {
//     console.log(`${this.name} dang ngu`)
//   }

//   hello() {
//     console.log(`${this.name} chao ban`);
//   }

// }
// const thoang = new Person('Thoang', 22);
// thoang.hello();
// thoang.run();
// thoang.sleep();
