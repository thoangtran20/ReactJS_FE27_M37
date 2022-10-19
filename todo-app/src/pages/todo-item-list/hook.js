import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TodoListContext } from '../../context/TodoListContext'

// Custom Hook
export const useTodoItemList = (status) => {
  // 'use' prefix
  // const { data } = useContext(TodoListContext)

  // Redux
  const data = useSelector((state) => state.todoListReducer.data)

  console.log(data)

  const [currentData, setCurrentData] = useState([])

  // console.log(data)

  useEffect(() => {
    // Cho trường hợp all
    if (!status) {
      setCurrentData(data)
      return
    }

    // filter theo status của mỗi trang
    const filterList = data.filter((item) => item?.status === status)
    setCurrentData(filterList)
  }, [data, status])

  return {
    currentData,
  }
}

export const usePagination = (data, itemsPerPage) => {
  // const [dataPerPage, setDataPerPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const maxPage = Math.ceil(data.length / itemsPerPage)

  const jumpPage = (nextPage) => {
    if (nextPage === currentPage) return

    setCurrentPage(nextPage)
  }

  const currentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const dataPerPage = data.slice(startIndex, endIndex)
    return dataPerPage
  }

  return {
    jumpPage,
    dataPerPage: currentData(),
    currentPage,
    maxPage,
  }
}
