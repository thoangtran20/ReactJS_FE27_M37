import { useState } from 'react';
import './style.scss'

const RED = 1;
const ORANGE = 2;
const GREEN = 3;

// useState() trả về 1 mảng gồm 2 phần tử

// const arr = [1, 2, 3, 4];

// const [a, b, c, d] = arr; 

function destructuringDemo() {
  // Object
  const object1 = { a: 1, b: 2, c: 3 };
  const object2 = { d: 4, e: 5 };
  const object12 = {
    ...object1, 
    ...object2,
  };
  console.log({
    ...object12,
  });

  // Array

  const arr1 = [0, 1, 2];
  const arr2 = [4, 5];

  const arr12 = [...arr1, ...arr2];
  const arr11 = [...arr1, 3];
  console.log("Noi 2 mang", arr12);
  console.log("Them phan tu", arr11);
}

destructuringDemo();

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