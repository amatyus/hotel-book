import React, {useContext, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import roomService from '../services/room.service'
import Loader from '../components/common/form/loader'

const RoomsContext = React.createContext()

export const useRooms = () => {
  return useContext(RoomsContext)
}

export const RoomsProvider = ({children}) => {
  const [rooms, setRooms] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getRooms = async () => {
      try {
        const {content} = await roomService.fetchAll()
        setRooms(content)
        setLoading(false)
      } catch (error) {
        errorCatcher(error)
      }
    }
    getRooms()
  }, [])

  function errorCatcher(error) {
    const {message} = error.response.data
    setError(message)
    setLoading(false)
  }
  const getRoom = (id) => {
    return rooms.find((r) => r.id === id)
  }

  const updateRoomData = async (id, data) => {
    try {
      const {content} = await roomService.update(id, data)
      setRooms((prevState) =>
        prevState.map((item) => {
          if (item.id === content.id) {
            return content
          }
          return item
        })
      )
      return content
    } catch (error) {
      setError(error)
    }
  }

  const addRoom = async (data) => {
    try {
      const {content} = await roomService.create(data)
      setRooms((prevState) => [...prevState, content])
      return content
    } catch (error) {
      setError(error)
    }
  }
  async function createRoom(data) {
    try {
      const {content} = roomService.create(data)
      setRooms(content)
    } catch (error) {
      errorCatcher(error)
    }
  }

  useEffect(() => {
    if (error !== null) {
      setError(null)
    }
  }, [error])

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        getRoom,
        updateRoomData,
        addRoom,
        createRoom,
        isLoading
      }}
    >
      {!isLoading ? children : <Loader />}
    </RoomsContext.Provider>
  )
}

RoomsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
