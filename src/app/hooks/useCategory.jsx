import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import caregoryService from '../services/category.service'

const CategoryContext = React.createContext()

export const useCategory = () => {
  return useContext(CategoryContext)
}

export const CategoryProvider = ({children}) => {
  const [isLoading, setLoading] = useState(true)
  const [category, setCategory] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    if (error !== null) {
      setError(null)
    }
  }, [error])

  useEffect(() => {
    getCategoryList()
  }, [])
  function errorCatcher(error) {
    const {message} = error.response.data
    setError(message)
  }

  function getCategory(id) {
    return category.find((p) => p.id === id)
  }

  async function getCategoryList() {
    try {
      const {content} = await caregoryService.get()

      setCategory(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }

  return (
    <CategoryContext.Provider
      value={{isLoading, category, getCategoryList, getCategory}}
    >
      {children}
    </CategoryContext.Provider>
  )
}

CategoryProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
