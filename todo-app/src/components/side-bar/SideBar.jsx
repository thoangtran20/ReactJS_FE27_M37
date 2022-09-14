import './SideBar.scss'

function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar_item">
        <p className="item-text">All Task</p>
      </div>
      <div className="side-bar_item">
        <p className="item-text">New Task</p>
      </div>
      <div className="side-bar_item">
        <p className="item-text">Doing Task</p>
      </div>
      <div className="side-bar_item">
        <p className="item-text">Done Task</p>
      </div>
    </div>
  )
}

export default SideBar
