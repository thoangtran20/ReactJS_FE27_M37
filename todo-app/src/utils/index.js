import { FORM_PAGE, LIST_PAGE } from "../const";

export const getNextPage = (page) => {
  if(page === LIST_PAGE) return FORM_PAGE;
  if(page === FORM_PAGE) return LIST_PAGE;
  return LIST_PAGE;
}

export const localStorageUtil = (key, defaultValue) => {
  const get = () => localStorage.getItem(key) || JSON.stringify(defaultValue);
  const set = (value) => localStorage.setItem(key, JSON.stringify(value));
  const remove = () => localStorage.removeItem(key);

  return {
    set,
    get,
    remove,
  }
}

