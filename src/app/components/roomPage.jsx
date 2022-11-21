import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Loader from '../components/common/form/loader'
import {useHistory} from 'react-router-dom'
import Button from './common/button'
import Carousel from 'react-multi-carousel'
import '../../css/roomPage.css'
import 'react-multi-carousel/lib/styles.css'
import BackButton from './common/backButton'
import roomService from '../services/room.service'

const RoomPage = ({roomId}) => {
  const [room, setRoom] = useState()

  useEffect(() => {
    roomService.fetchAll().then((data) => setRoom(data))
  }, [])

  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
    }
  }

  if (room) {
    return (
      <>
        <div className="row p-5">
          <div className="px-5">
            <BackButton />
          </div>

          <div className="card p-5 ">
            {/* <Carousel responsive={responsive}> */}
            {/* {room &&
                room.image.map((img) => (
                  <div key={room}>
                    <img
                      key={room.id}
                      src={require(`../../img/singleRoom/${img}`)}
                      alt="..."
                      className="w-50"
                    />
                  </div>
                ))} */}
            {/* </Carousel> */}

            <div className="card-body ">
              {/* <h5 className="card-title">{room.title}</h5>
              <p className="card-text">{room.description}</p>
              <p className="card-text-price">Price: {room.price}$</p>
              <p className="card-text-category">Category: {room.category}</p>
              <p className="card-text-rating">Rating: {room.rating.rate}</p> */}
              <Button type="button" text="Забронировать" />
            </div>
          </div>
        </div>
      </>
    )
  }
  return <Loader />
}

RoomPage.propTypes = {
  roomId: PropTypes.string.isRequired
}

export default RoomPage
