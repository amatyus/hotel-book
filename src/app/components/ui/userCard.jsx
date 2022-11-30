import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../../hooks/useAuth'

const UserCard = ({user}) => {
  console.log(user)
  const history = useHistory()
  const {currentUser} = useAuth()
  console.log(currentUser)

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex flex-column align-items-center text-center position-relative">
          <div className="mt-3">
            <h4>{user.name}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
UserCard.propTypes = {
  user: PropTypes.object
}

export default UserCard
