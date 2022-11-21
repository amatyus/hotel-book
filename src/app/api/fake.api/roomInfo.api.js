const roomInfo = [
  {
    id: '1',
    title: 'Single Room',
    image: ['single-room.jpg']
  },
  {
    id: '2',
    title: 'Double Room',
    image: ['double-room.jpg']
  },
  {
    id: '3',
    title: 'Cootage',
    image: ['cootege.jpg']
  }
]

const fetchRoomInfo = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(roomInfo)
    }, 2000)
  })

export default {
  fetchRoomInfo
}
