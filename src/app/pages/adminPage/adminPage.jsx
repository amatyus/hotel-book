import React from 'react'
import PropTypes from 'prop-types'

const AdminPage = () => {
  return (
    <div className="container">
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3"></div>
      </div>
    </div>
  )
}

AdminPage.propTypes = {
  userId: PropTypes.string.isRequired
}

export default AdminPage
