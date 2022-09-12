import './Section.scss'
import img from './images/images.jpeg'

function Section() {
  return (
    <div className='section'>
      <img className='section-img' src={img} alt="" />
    </div>
  )
}

export default Section