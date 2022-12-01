import React from 'react'
import UserPage from '../pages/userPage/userPage'
import UserProvider from '../hooks/useUser'
import {useAuth} from '../hooks/useAuth'
import {useParams} from 'react-router-dom'
import EditUserPage from '../pages/editUserPage/editUserPage'
import RoomsListPage from '../pages/roomsListPage'

const Users = () => {
  const {currentUser} = useAuth()
  const userId = currentUser.id
  const params = useParams()
  const {edit} = params

  if (userId) {
    return (
      <>
        <UserProvider>
          {userId ? (
            edit ? (
              <EditUserPage />
            ) : (
              <UserPage userId={userId} />
            )
          ) : (
            <RoomsListPage />
          )}
        </UserProvider>
      </>
    )
  }
}
export default Users
