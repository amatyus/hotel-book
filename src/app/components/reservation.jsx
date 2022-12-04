import React from 'react'

import RoomsCard from './ui/roomsCard'
import Loader from './common/form/loader'
import {useTitleInfo} from '../hooks/useTitleInfo'

const Reservation = () => {
  const {images} = useTitleInfo()

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
