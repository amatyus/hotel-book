import httpService from './http.service'
const roomEndPoint = 'rooms/'

const roomService = {
  update: async (id, content) => {
    const {data} = await httpService.put(roomEndPoint + id, content)
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
  create: async (content) => {
    const {data} = await httpService.post(roomService, content)
    return data
  }
}
export default roomService