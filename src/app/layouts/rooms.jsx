import React from 'react'
import RoomsListPage from '../pages/roomsListPage'
import {useParams} from 'react-router-dom'
import RoomPage from '../components/roomPage'
import EditRoomsPage from '../pages/editRoomsPage'

const Rooms = () => {
  const params = useParams()
  const {roomId, edit} = params

  return (
    <>
      {roomId ? (
        edit ? (
          <EditRoomsPage roomId={roomId} />
        ) : (
          <RoomPage roomId={roomId} />
        )
      ) : (
        <RoomsListPage />
      )}
    </>
  )
}

export default Rooms
