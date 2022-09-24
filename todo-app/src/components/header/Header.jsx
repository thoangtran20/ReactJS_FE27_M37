// import { FORM_PAGE } from '../../const'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ROUTE } from '../../const';
// import { getNextPage } from '../../utils'
import './Header.scss'
function Header(props) {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('search'));
  // const { onOpenFormPage, page } = props

  const onAddButtonClick = () => {
    navigate(ROUTE.addNew);
    // const nextPage = getNextPage(page)
    // onOpenFormPage(nextPage)
    // console.log(page);
  }

  return (
    <div className="todo-header">
      {/* setCurrentPage(FORM_PAGE) */}
      <div>
        <button onClick={onAddButtonClick} className="btn-create">
          Create New Task
        </button>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setSearchParams({ search: e.target.value })}
          className="search-input"
          placeholder="Type something to search"
        />
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
}

export default Header
