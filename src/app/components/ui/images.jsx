import React from 'react'
import PropTypes from 'prop-types'
import {useImage} from '../../hooks/useImage'

const Images = (id, name) => {
  const {getImage} = useImage()

  //   return (
  //     <>
  //       <img
  //         src={require(`${name}`)}
  //         className="card-img-top"
  //         alt="imageRoom"
  //       ></img>
  //     </>
  //   )
}
Images.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}

export default Images
