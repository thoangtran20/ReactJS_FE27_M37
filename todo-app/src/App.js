// import { useState } from 'react';
import './App.css'
// import { TodoItem } from './components/TodoItem'
// import TodoItemList from './components/TodoItemList'
import MainLayout from './layout/MainLayout'

function App() {
  // var number = 10 / 2 + 1;

  // This is state
  // const [number , setNumber] = useState(0);

  return (
    <div className="App">
      {/* <h1>Hello Thoang</h1>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Increase</button> */}
      {/* <TodoItem />
      <TodoItemList /> */}
      <MainLayout />
    </div>
  )
}

export default App
