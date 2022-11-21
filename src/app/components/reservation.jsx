import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import api from '../api'

import RoomsCard from './ui/roomsCard'
import Loader from './common/form/loader'

const Reservation = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    api.roomInfo.fetchRoomInfo().then((data) => {
      setRooms(data)
    })
  }, [])
  if (rooms.length) {
    return (
      <>
        <div className="container  ">
          <div className="row">
            {rooms &&
              rooms.map((room) => (
                <React.Fragment key={room.id}>
                  <div className="col">
                    <RoomsCard {...room} />{' '}
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </>
    )
  }
  return <Loader />
}

Reservation.propTypes = {
  //   roomId: PropTypes.string.isRequired
}

export default Reservation
