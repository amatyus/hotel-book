import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import userService from '../services/user.service'
import {useAuth} from './useAuth'

const UserContext = React.createContext()

export const useUser = () => {
  return useContext(UserContext)
}

const UserProvider = ({children}) => {
  const [users, setUsers] = useState([])
  const {currentUser} = useAuth()
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    if (error !== null) {
      setError(null)
    }
  }, [error])

  useEffect(() => {
    if (!isLoading) {
      const newUsers = [...users]
      const indexUser = newUsers.findIndex((u) => u.id === currentUser.id)
      newUsers[indexUser] = currentUser
      setUsers(newUsers)
    }
  }, [currentUser])
  async function getUsers() {
    try {
      const {content} = await userService.get()
      setUsers(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }
  function errorCatcher(error) {
    const {message} = error.response.data
    setError(message)
    setLoading(false)
  }
  function getUserById(userId) {
    return users.find((u) => u.id === userId)
  }
  return (
    <UserContext.Provider value={{users, getUserById}}>
      {!isLoading ? children : 'Loading...'}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default UserProvider
