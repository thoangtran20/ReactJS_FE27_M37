import { useState } from 'react';
import './style.scss'

const RED = 1;
const ORANGE = 2;
const GREEN = 3;

// useState() trả về 1 mảng gồm 2 phần tử

// const arr = [1, 2, 3, 4];

// const [a, b, c, d] = arr; 

function StateDemo() {
  // let currentColor = RED;

  const [currentColorState, setCurrentColorState] = useState(RED);

  const getNextColor = () => {
    if(currentColorState === RED) {
      return ORANGE;
    }
    if(currentColorState === ORANGE) {
      return GREEN;
    }
    if(currentColorState === GREEN) {
      return RED;
    }
  }

  const changeColor = () => {
    setCurrentColorState(getNextColor());
  }


  return (
    <div className="StateDemo">
      <div className={`light red-light ${currentColorState === RED ? 'active' : ""}`}></div>
      <div className={`light orange-light ${currentColorState === ORANGE ? 'active' : ""}`}></div>
      <div className={`light green-light ${currentColorState === GREEN ? 'active' : ""}`}></div>
      <button onClick={() => changeColor()}>Change Light Color</button>
    </div>
  )
}

export default StateDemo