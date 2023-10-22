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

const getAllAnimesFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') }
  }
  const animes = await Anime.find(filter ? nameFilterOptions : {}).populate({
    path: 'fans',
    model: 'Otaku',
    select: {
      _id: true,
      name: true,
      surname: true,
      email: true
    }
  })

  return animes
}

const getAnimeByIdFromDB = async (id) => {
  const anime = await Anime.findById(id).populate({
    path: 'fans',
    model: 'Otaku',
    select: {
      _id: true,
      name: true,
      surname: true,
      email: true
    }
  })
  return anime
}

const createAnimeInDB = async (payload) => {
  const newAnime = new Anime(payload)
  await newAnime.save()

  return newAnime
}

const deleteAnimeFromDB = async (id) => {
  await Anime.deleteOne({ _id: id })
}

const updateAnimeByIdInDB = async (id, payload) => {
  const anime = await Anime.findByIdAndUpdate(id, payload, {
    new: true
  }).populate({
    path: 'fans',
    model: 'Otaku',
    select: {
      _id: true,
      name: true,
      surname: true,
      email: true
    }
  })
  return anime
}

module.exports = {
  cleanAnimeCollections,
  saveAnimeDocuments,
  updateFansAnimesInDB,
  cleanAnimePrivateFields,
  getAllAnimesFromDB,
  getAnimeByIdFromDB,
  createAnimeInDB,
  deleteAnimeFromDB,
  updateAnimeByIdInDB
}
