import React from 'react'
import AddRoomsPage from '../pages/addRoomPage'
import {useRooms} from '../hooks/useRooms'

const AdminPage = () => {
  const {addRoom} = useRooms()

  const handeleSubmit = (data) => {
    addRoom(data)
    console.log(data)
  }
  return (
    <>
      <AddRoomsPage onSubmit={handeleSubmit} />
    </>
  )
}

export default AdminPage
