import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import imageService from '../services/image.cervice'

const ImageContext = React.createContext()

export const useImage = () => {
  return useContext(ImageContext)
}

export const ImageProvider = ({children}) => {
  const [isLoading, setLoading] = useState(true)
  const [image, setImage] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getImageList()
  }, [])
  function errorCatcher(error) {
    const {message} = error.response.data
    setError(message)
  }

  function getImage(id) {
    return image.find((p) => p.id === id)
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

  return (
    <ImageContext.Provider value={{isLoading, image, getImageList, getImage}}>
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
