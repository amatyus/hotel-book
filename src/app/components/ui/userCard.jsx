import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../../hooks/useAuth'
import '../../../css/userCard.css'

const UserCard = ({user}) => {
  const history = useHistory()
  const {currentUser} = useAuth()

  const handleClick = () => {
    history.push(history.location.pathname + '/edit')
  }

  return (
    <div className="card mb-3">
      <div className="card-body user-card ">
        {currentUser.id === user.id && (
          <button
            className="position-absolute top-0 end-0 btn btn-light btn-sm m-1"
            onClick={handleClick}
          >
            <i className="bi bi-gear"></i>
          </button>
        )}

        <div className="d-flex flex-column align-items-center text-center position-relative">
          <img src={user.image} className="rounded-circle" width="150" />
          <div className="mt-3">
            <h4>Имя: {user.name}</h4>
            <h4>Email: {user.email}</h4>
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
