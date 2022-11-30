import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import imageService from '../services/image.service'

const ImageContext = React.createContext()

export const useImage = () => {
  return useContext(ImageContext)
}

export const ImageProvider = ({children}) => {
  const [isLoading, setLoading] = useState(true)
  const [images, setImage] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const getImage = async () => {
      try {
        const {content} = await imageService.fetchAll()
        setImage(content)
        setLoading(false)
      } catch (error) {
        errorCatcher(error)
      }
    }
    getImage()
  }, [])

  function errorCatcher(error) {
    const {message} = error.response.data
    setError(message)
    setLoading(false)
  }

  async function getImageList() {
    try {
      const {content} = await imageService.fetchAll()

      setImage(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }

  function getImage(id) {
    return images.find((p) => p.id === id)
  }

  return (
    <ImageContext.Provider value={{isLoading, images, getImageList, getImage}}>
      {children}
    </ImageContext.Provider>
  )
}

ImageProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
