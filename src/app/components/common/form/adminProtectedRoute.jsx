import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {useAuth} from '../../../hooks/useAuth'

function AdminProtectedRoute({component: Component, children, ...rest}) {
  const {currentUser, isLoading} = useAuth()
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoading && !currentUser?.isAdmin) {
          return (
            <Redirect
              to={{
                pathname: '/main',
                state: {
                  from: props.location
                }
              }}
            />
          )
        }
        return Component ? <Component {...props} /> : children
      }}
    />
  )
}
AdminProtectedRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default AdminProtectedRoute
