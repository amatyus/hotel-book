import httpService from './http.service'

const imageEndpoint = 'image/'

const imageService = {
  get: async (id) => {
    const {data} = await httpService.get(imageEndpoint + id)
    return data
  },
  fetchAll: async () => {
    const {data} = await httpService.get(imageEndpoint)
    return data
  }
}
export default imageService
