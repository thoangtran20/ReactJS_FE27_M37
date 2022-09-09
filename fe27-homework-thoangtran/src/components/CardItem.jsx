import './style.css'
import { FaStar, FaRegStar } from 'react-icons/fa'
import img from '../components/images/images.png'

export const CardItem = () => {
  return (
    <div className="card-item">
      <>
        <div className="card-item-header">
          <img src={img} alt="" />
        </div>
      </>
      <div className="card-item-body">
        <div className="body-top">
          <h2 className="top-header">Title</h2>
          <div className="card-star">
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaStar className="star"></FaStar>
            <FaRegStar className="star"></FaRegStar>
            <p>4.5 (413)</p>
          </div>
          <h5 className="top-text">Secondary text</h5>
          <p className="top-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <hr />
        <div className="body-bottom">
          <h2 className="bottom-header">Subtitle</h2>
          <div className="bottom-item">
            <button className="bottom-btn">Item 1</button>
            <button className="bottom-btn">Item 2</button>
            <button className="bottom-btn">Item 3</button>
            <button className="bottom-btn">Item 4</button>
          </div>
          <a href="$" className="bottom-link">
            ACTION 1
          </a>
        </div>
      </div>
    </div>
  )
}
