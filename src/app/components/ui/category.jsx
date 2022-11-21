import React from 'react'
import PropTypes from 'prop-types'
import {useCategory} from '../../hooks/useCategory'
import Loader from '../common/form/loader'

const Category = ({id}) => {
  const {isLoading, getCategory} = useCategory()
  const category = getCategory(id)

  if (!isLoading) {
    return <p>{category.name}</p>
  } else {
    return <Loader />
  }
}
Category.propTypes = {
  id: PropTypes.string
}

export default Category
