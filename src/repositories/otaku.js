const seed = require('../seed')
const Otaku = require('../model/otaku')

const cleanOtakuCollections = async () => {
  await Otaku.collection.drop()
  console.log('>>> Colección Otaku limpia!')
}
const saveOtakusDocuments = async () => {
  const otakus = await Otaku.insertMany(seed.otakus)
  console.log('>>>> Documentos Otakus guardados con éxito')

  return {
    otakus
  }
}

const updateOtakusFavoriteAnimeInDB = async (animes, otakus) => {
  await Promise.all(
    otakus.map(async (otaku) => {
      const anime = animes.find(
        (anime) => anime._animeId === otaku._favoriteAnime
      )
      await otaku.updateOne({ _favoriteAnime: anime._id })
    })
  )

  console.log(`>>>> Otakus' favoriteAnime actualizados`)
}

const cleanOtakuPrivateFields = async () => {
  await Otaku.updateMany(
    {},
    {
      $unset: {
        _userId: 1,
        _favoriteOtaku: 1
      }
    }
  )

  console.log('>>>>Campos utilitarios de Otaku eliminados')
}
const getAllOtakusFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') }
  }
  const otakus = await Otaku.find(filter ? nameFilterOptions : {})
  return otakus
}

const getOtakuByIdFromDB = async (id) => {
  const otaku = await Otaku.findById(id)
  return otaku
}

const createOtakuInDB = async (payload) => {
  const newOtaku = new Otaku(payload)
  await newOtaku.save()
  console.log('>>>>creating otaku')
  return newOtaku
}

const deleteOtakuFromDB = async (id) => {
  await Otaku.deleteOne({ _id: id })
}

module.exports = {
  cleanOtakuCollections,
  saveOtakusDocuments,
  updateOtakusFavoriteAnimeInDB,
  cleanOtakuPrivateFields,
  getAllOtakusFromDB,
  getOtakuByIdFromDB,
  createOtakuInDB,
  deleteOtakuFromDB
}
