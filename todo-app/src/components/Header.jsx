import './Header.scss'
function Header() {
  return (
    <div className="todo-header">
      <div>
      <button className="btn-create">Create New Task</button>
      </div>
      <div>
      <input
        type="text"
        className="search-input"
        placeholder="Type something to search"
      />
      <button className="btn-search">Search</button>
      </div>
    </div>
  )
}

export default Header
