import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import imageService from '../services/image.service'

const titleInfoContext = React.createContext()

export const useTitleInfo = () => {
  return useContext(titleInfoContext)
}

export const TitleInfoProvider = ({children}) => {
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
    <titleInfoContext.Provider
      value={{isLoading, images, getImageList, getImage}}
    >
      {children}
    </titleInfoContext.Provider>
  )
}

TitleInfoProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
