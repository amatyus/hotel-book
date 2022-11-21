import React from 'react'
import PropTypes from 'prop-types'

const UserPage = () => {
  return (
    <div className="container">
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3"></div>
      </div>
    </div>
  )
}

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
}

export default UserPage
