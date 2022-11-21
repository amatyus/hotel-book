import React from 'react'
import PropTypes from 'prop-types'
import '../../../css/room-card.css'
import '../../../img/singleRoom/single-1_1.jpg'

const RoomsCard = (props) => {
  const {title, image} = props

  return (
    <>
      <div className="card">
        <img
          src={require(`../../../img/${image[0]}`)}
          className="card-img-top"
          alt={image.id}
        ></img>

        <div className="card-body px-0">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </>
  )
}

RoomsCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  linkText: PropTypes.string,
  nameImg: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.array
}
export default RoomsCard
