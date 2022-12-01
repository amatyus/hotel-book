const Category = require('../models/Category')
const categoryMock = require('../mock/category.json')

module.exports = async () => {
  //   const profession = await Profession.find()
  //   if (profession.length !== professionMock.length) {
  //     await createInitialEntity(Profession, professionMock)
  //   }
  //   const qualities = await Qualitiy.find()
  //   if (qualities.length !== qualitiesMock.length) {
  //     await createInitialEntity(Qualitiy, qualitiesMock)
  //   }
}

// async function createInitialEntity(Model, data) {
//   await Model.collection.drop()
//   return Promise.all(
//     data.map(async (item) => {
//       try {
//         delete item._id
//         const newItem = new Model(item)
//         await newItem.save()
//         return newItem
//       } catch (error) {
//         return error
//       }
//     })
//   )
// }
