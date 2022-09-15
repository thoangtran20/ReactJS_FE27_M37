import './style.scss'
import { useState } from 'react';
import {FaHandPointer, FaPlus, FaMinus, FaSyncAlt } from 'react-icons/fa'

function StateAmount() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  }
  const reduce = () => {
    setCount(count - 1);
  }
  return (
    <div className='container'>
      <div className='title'>
        <FaHandPointer className='icon-fointer' />
        <h2 className='title-content'>React Clicker</h2>
      </div>
      <div className='content'>
        <div className='number'>{count}</div>
        <div className='action'>
          <button className='btn-plus' onClick={increase}>
            <FaPlus className='icon-plus' />
          </button>
          <button className='btn-reset' onClick={reset}>
            <FaSyncAlt className='icon-reset' />
          </button>
          <button className='btn-minus' onClick={reduce}>
            <FaMinus className='icon-minus' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StateAmount;