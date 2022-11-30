import React from 'react'
import UserPage from '../pages/userPage/userPage'
import UserProvider from '../hooks/useUser'
import {useAuth} from '../hooks/useAuth'

const Users = () => {
  const {currentUser} = useAuth()
  const userId = currentUser.id

  if (userId) {
    return (
      <>
        <UserProvider>
          <UserPage userId={userId} />
        </UserProvider>
      </>
    )
  }
}

export default Users
