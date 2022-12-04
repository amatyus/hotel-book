import React, {useState, useEffect} from 'react'
import {paginate} from '../utils/paginate'
import Pagination from '../components/pagination'
import RoomsPage from './roomsPage'
import Loader from '../components/common/form/loader'
import {useRooms} from '../hooks/useRooms'
import GroupList from '../components/ui/groupList'
import {useCategory} from '../hooks/useCategory'
import Button from '../components/common/button'
import _ from 'lodash'

const RoomsListPage = () => {
  const {rooms} = useRooms()
  const {category} = useCategory()
  const [selectedCategory, setSelectedCategory] = useState()
  const [sortBy, setSortBy] = useState({path: 'rating', order: 'desc'})
  console.log(sortBy)

  const pageSize = 6

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleProfessionSelect = (item) => {
    setSelectedCategory(item)
  }
  const filteredRooms = selectedCategory
    ? rooms.filter((room) => room.category === selectedCategory.id)
    : rooms

  const count = filteredRooms.length

  const sortedRooms = _.orderBy(filteredRooms, [sortBy.path], [sortBy.order])

  const pageRooms = paginate(sortedRooms, currentPage, pageSize)

  const handleSort = (item) => {
    if (sortBy.path === item) {
      setSortBy((prevState) => ({
        ...prevState,
        order: prevState.order === 'asc' ? 'desc' : 'asc'
      }))
    } else {
      setSortBy({path: item, order: 'asc'})
    }
  }

  const clearFilter = () => {
    setSelectedCategory()
  }
  const rendeSortArrow = (sortBy, currentPath) => {
    if (sortBy.path === currentPath) {
      if (sortBy.order === 'asc') {
        return <i className="bi bi-caret-down-fill"></i>
      } else {
        return <i className="bi bi-caret-up-fill"></i>
      }
    }
    return null
  }

  if (pageRooms.length) {
    return (
      <>
        {category && (
          <>
            <div className="d-inline-flex flex-column  mt-5 mx-5 px-5">
              <GroupList
                onItemSelect={handleProfessionSelect}
                selectedItem={selectedCategory}
              />

              <Button
                text="Очистить"
                type="button"
                onClick={clearFilter}
                className={'mt-1'}
              />
            </div>
          </>
        )}
        <h5
          className="d-inline card-rating m-1"
          onClick={() => handleSort('rate')}
        >
          Rate
        </h5>
        {rendeSortArrow(sortBy, 'rate')}

        <div className="row row-cols-1 row-cols-md-2 mx-5 px-5 my-4  ">
          {pageRooms &&
            pageRooms.map((room) => <RoomsPage key={room.id} {...room} />)}
        </div>
        <div className="row">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </>
    )
  }
  return <Loader />
}

export default RoomsListPage
