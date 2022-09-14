import { FORM_PAGE, LIST_PAGE } from "../const";

export const getNextPage = (page) => {
  if(page === LIST_PAGE) return FORM_PAGE;
  if(page === FORM_PAGE) return LIST_PAGE;
  return LIST_PAGE;
}
