import React from 'react'
import PropTypes from 'prop-types'
import {useCategory} from '../../hooks/useCategory'

const GroupList = ({onItemSelect, selectedItem}) => {
  const {category} = useCategory()

  return (
    <ul className="list-group list-group-flush">
      {Object.keys(category).map((c) => (
        <li
          key={category[c].id}
          className={
            'list-group-item category-sort' +
            (category[c] === selectedItem ? ' list-group-item-dark' : '')
          }
          onClick={() => {
            onItemSelect(category[c])
          }}
          role="button"
        >
          {category[c].name}
        </li>
      ))}
    </ul>
  )
}

GroupList.propTypes = {
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
}

export default GroupList
