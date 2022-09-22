export const LIST_PAGE = 'LIST_PAGE'
export const FORM_PAGE = 'FORM_PAGE'

export const TASK_STATUS = {
  new: 'NEW',
  doing: 'DOING',
  done: 'DONE',
}

export const ROUTE = {
  all: '/',
  doing: '/doing',
  new: '/new',
  done: '/done',
  addNew: '/add-new',
  editForm: '/edit-form',
  details: '/detail',
  notFounds: '*',
}

export const SIDEBAR_ITEMS = [
  {
    label: 'All Items',
    link: '/',
  },
  {
    label: 'New',
    link: '/new',
  },
  {
    label: 'Doing',
    link: '/doing',
  },
  {
    label: 'Done',
    link: '/done',
  },
]

export const localStorageKey = {
  todoItems: 'TODO_ITEM_KEY',
}
