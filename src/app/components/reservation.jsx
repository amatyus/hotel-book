import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import RoomsCard from './ui/roomsCard'
import Loader from './common/form/loader'
import {useImage} from '../hooks/useImage'

const Reservation = () => {
  const [rooms, setRooms] = useState([])
  const {images} = useImage()
  console.log(images)

  if (images.length) {
    return (
      <>
        <div className="container  ">
          <div className="row">
            {images &&
              images.map((image) => (
                <React.Fragment key={image.id}>
                  <div className="col">
                    <RoomsCard {...image} />
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
