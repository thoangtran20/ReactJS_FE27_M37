import './TodoItem.scss'

const TodoItem = (props) => {
  console.log(props)
  return (
    <div className="todo-item">
      <div className='item-id'>{props.id}</div>
      <div className="item-img">
        <img className="image-item" src={props.img} alt="" />
      </div>
      <div className="item-detail">
        <p className="item-title">{props.title}</p>
        <p className='item-creator'>By <span className='item-creator-name'>{props.creator}</span></p>
        <p className='item-description'>{props.description}</p>
      </div>
    </div>
  )
}

export default TodoItem
