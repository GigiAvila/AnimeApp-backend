const seed = require('../seed')
const Anime = require('../model/anime')

const cleanAnimeCollections = async () => {
  await Anime.collection.drop()
  console.log('>>> Colección Anime limpia!')
}
const saveAnimeDocuments = async () => {
  const animes = await Anime.insertMany(seed.animes)
  console.log('>>>>  Documentos Anime guardados con éxito')

  return {
    animes
  }
}

const updateFansAnimesInDB = async (animes, otakus) => {
  await Promise.all(
    animes.map(async (anime) => {
      const fansOfThisAnime = anime._fans.map((fanId) => {
        const relatedOtaku = otakus.find((otaku) => otaku._userId === fanId)
        return relatedOtaku._id
      })
      await anime.updateOne({ fans: fansOfThisAnime })
    })
  )

  console.log('>>>> Fans de Animes actualizados')
}

const cleanAnimePrivateFields = async () => {
  await Anime.updateMany(
    {},
    {
      $unset: {
        _animeId: 1,
        _fans: 1
      }
    }
  )

  console.log('>>>>Campos utilitarios de Anime eliminados')
}

module.exports = {
  cleanAnimeCollections,
  saveAnimeDocuments,
  updateFansAnimesInDB,
  cleanAnimePrivateFields
}
