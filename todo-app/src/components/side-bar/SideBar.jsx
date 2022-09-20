import { Link } from 'react-router-dom'
import { SIDEBAR_ITEMS } from '../../const'
import './SideBar.scss'

function SideBar() {
  return (
    <div className="side-bar">
      {/* <div className="side-bar_item">
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
      </div> */}
      {SIDEBAR_ITEMS.map((item, index) => (
        <Link key={index} to={item.link} className="side-bar_link">
          <div className="side-bar_item">
            <p className="item-text">{item.label}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SideBar
