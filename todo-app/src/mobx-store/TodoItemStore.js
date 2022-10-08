import { action, makeObservable, observable, computed } from 'mobx'

// const [todoItems, setTodoItems] = useState();

class TodoItemStore {
  todoItems = []

  constructor() {
    makeObservable(this, {
      todoItems: observable,
      setTodoItems: action,
      todoItemsCount: computed,
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
