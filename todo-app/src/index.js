import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { todoStore } from './mobx-store/TodoItemStore'
import MiniTodoApp from './redux-demo/MiniTodoApp'
import { store } from './redux-demo/redux/store/store'
import { Provider } from 'react-redux'
import { appStore } from './redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={appStore}>
        <App store={todoStore} />
      </Provider>
    </BrowserRouter>
    // {/* <Provider store={store}>
    //   <MiniTodoApp />
    // </Provider> */}
  // </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
