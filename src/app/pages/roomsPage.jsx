import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import Button from '../components/common/button'
// import '../../img/singleRoom/'
import {useImage} from '../hooks/useImage'
import Images from '../components/ui/images'

const RoomsPage = (props) => {
  const {title, id} = props
  const {image, getImage} = useImage()

  const history = useHistory()

  const handleOpen = () => {
    history.push(`/rooms/${id}`)
  }
  const handleEdit = () => {
    history.push(`/rooms/edit/${id}`)
  }

  // <img
  //   src={require(`../../img/singleRoom/${image[0]}`)}
  //   className="card-img-top"
  //   alt="imageRoom"
  // ></img>
  return (
    <>
      <div className="col px-5 my-5">
        <div className="card">
          {image && image.map((img) => <Images key={img.id} {...img} />)}

          {/* {image &&
            image.map((img) => (
              <img
                key={img.id}
                src={require(`../../img/singleRoom/${getImage(img.id)}`)}
                className="card-img-top"
                alt="imageRoom"
              ></img>
            ))} */}

          <div className="card-body px-0">
            <h5 className="card-title">{title}</h5>
            <Button type="button" text="Подробнее" onClick={handleOpen} />
            <Button
              type="button"
              className=" mx-4"
              text="Редактировать"
              onClick={handleEdit}
            />
          </div>
        </div>
      </div>
    </>
  )
}

RoomsPage.propTypes = {
  title: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  description: PropTypes.string
}

export default RoomsPage
