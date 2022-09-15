import './TodoItemList.scss'
import safari_food from './Images/food.jpg'
import travel_india from './Images/travel.jpg'
import perfect_egg from './Images/perfect_egg.png'
import babecue from './Images/barbecue-poster.jpg'
import TodoItem from './TodoItem'

const TodoList = [
  {
    img: safari_food,
    // img: 'https://cdn.getyourguide.com/img/tour/488c3356398dbcae.jpeg/146.jpg',
    title: 'Family safari vacation to the home of the gods',
    creator: 'Norman Clark',
    description:
      'The Emerald Buddha is a figurine of a sitting Budha, that is the palladium of Thailand. The Emerald Buddha is a figurine of a sitting Budha, that is the is the palladium of the.',
  },
  {
    img: travel_india,
    // img: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/10/Intrepid-Travel-india_taj-mahal_traveller-sunrise.jpg',
    title: 'Travelagent India',
    creator: 'Florence Keller',
    description:
      'For many women, visiting the skin care aisle at the drugstore can be as intimidating as ordering from all the complicated hot beverages an offer at the trendy local coffee shop...',
  },
  {
    img: perfect_egg,
    // img: 'https://www.thespruceeats.com/thmb/mJle-NEecEwJuwzfvgr_oRJuzlM=/735x0/Spruce_How_To_Order_Eggs_1328481_final1-5d8ff300647c476caeb315ccfa4b6882.png',
    title: 'Perfect scrambled eggs',
    creator: 'Florence Keller',
    description:
      'Using the simple tips to demystify your most common skin care problems, your perfect skin solution should become clear. That is the palladium of the Kingdom of Thailand...',
  },
  {
    img: babecue,
    // img: 'https://thumbs.dreamstime.com/b/barbecue-poster-flyer-template-menu-card-invitation-design-115139455.jpg',
    title: 'Famous names in barbecue',
    creator: 'Florence Keller',
    description:
      'The Emerald Buddha is a figurine of a sitting Budha, that is the palladium of Thailand. The Emerald Buddha is a figurine of a sitting Budha, that is the is the palladium of the.',
  },
]

const TodoItemList = function () {
  return (
    <div className="todo-item-list">
      {TodoList.map((item, index) => {
        return (
          <TodoItem
            key={index}
            id={index + 1}
            img={item.img}
            title={item.title}
            creator={item.creator}
            description={item.description}
          />
        )
      })}
    </div>
  )
}

export default TodoItemList
