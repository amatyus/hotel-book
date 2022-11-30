import React, {useState} from 'react'
import {paginate} from '../utils/paginate'
import Pagination from '../components/pagination'
import RoomsPage from './roomsPage'
import Loader from '../components/common/form/loader'
import {useRooms} from '../hooks/useRooms'

const RoomsListPage = () => {
  const {rooms} = useRooms()

  const count = rooms.length
  const pageSize = 6

  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const pageRooms = paginate(rooms, currentPage, pageSize)

  if (pageRooms.length) {
    return (
      <>
        <div className="row row-cols-1 row-cols-md-2 m-5 px-5  ">
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
