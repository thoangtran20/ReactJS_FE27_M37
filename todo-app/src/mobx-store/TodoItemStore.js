import { action, makeObservable, observable, computed } from 'mobx'
import { clientServer } from '../server/clientServer'

// const [todoItems, setTodoItems] = useState();

class TodoItemStore {
  todoItems = []

  constructor() {
    makeObservable(this, {
      todoItems: observable,
      setTodoItems: action,
      todoItemsCount: computed,
      fetchTodoItem: action,
    })
  }

  fetchTodoItem = () => {
    clientServer
      .get('todoItems')
      .then((res) => {
        this.todoItems = (res.data ?? []).reverse()
      })
      .catch((e) => {
        console.log('error: ', e)
      })
  }

  setTodoItems(todoItems) {
    this.todoItems = todoItems
  }

  getTodoItems() {
    return this.todoItems
  }

  get todoItemsCount() {
    return this.todoItems.length
  }
}

export const todoStore = new TodoItemStore()
