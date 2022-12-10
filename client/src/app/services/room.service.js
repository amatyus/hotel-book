import httpService from './http.service'
const roomEndPoint = 'rooms/'

const roomService = {
  update: async (id, content) => {
    const {data} = await httpService.patch(roomEndPoint + id, content)
    return data
  },
  get: async (id) => {
    const {data} = await httpService.get(roomEndPoint + id)
    return data
  },
  fetchAll: async () => {
    const {data} = await httpService.get(roomEndPoint)
    return data
  },
  create: async (payload) => {
    const {data} = await httpService.put(roomEndPoint + payload.id, payload)
    return data
  },
  remove: async (roomId) => {
    const {data} = await httpService.delete(roomEndPoint + roomId)
    return data
  }
}
export default roomService
