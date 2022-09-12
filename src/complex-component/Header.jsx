import './Header.scss'
import logo from './images/logo.jpg'

function Header() {
  return (
    <div className="header">
      <ul className="menu">
        <img className="logo" src={logo} alt="" />
        <li>
          <a href="$">Contact Us</a>
        </li>
        <li>
          <a href="$">News</a>
        </li>
        <li>
          <a href="$">Partners</a>
        </li>
        <li>
          <a href="$">Company</a>
        </li>
        <li>
          <a href="$">Product</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
