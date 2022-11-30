import React from 'react'
import PropTypes from 'prop-types'
import '../../../css/room-card.css'
import '../../../img/singleRoom/single-1_1.jpg'

const RoomsCard = (props) => {
  const {id, name, title} = props

  return (
    <>
      <div className="card">
        <img
          src={require(`../../../img/${name}`)}
          className="card-img-top"
          alt={id}
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
  name: PropTypes.string,
  id: PropTypes.string
}
export default RoomsCard
