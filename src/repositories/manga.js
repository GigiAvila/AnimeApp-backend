const seed = require('../seedData')
const Manga = require('../model/manga')
const Otaku = require('../model/otaku')

const cleanMangaCollections = async () => {
  await Manga.collection.drop()
  console.log('>>> Colección Manga limpia!')
}
const saveMangaDocuments = async () => {
  const mangas = await Manga.insertMany(seed.mangas)
  console.log('>>>>  Documentos Manga guardados con éxito')

  return {
    mangas
  }
}

const updateFansMangasInDB = async (mangas, otakus) => {
  await Promise.all(
    mangas.map(async (manga) => {
      const fansOfThisManga = manga._fans.map((fanId) => {
        const relatedOtaku = otakus.find((otaku) => otaku._userId === fanId)
        return relatedOtaku._id
      })
      await manga.updateOne({ fans: fansOfThisManga })
    })
  )

  console.log('>>>> Fans de Mangas actualizados')
}

const cleanMangaPrivateFields = async () => {
  await Manga.updateMany(
    {},
    {
      $unset: {
        _mangaId: 1,
        _fans: 1
      }
    }
  )

  console.log('>>>>Campos utilitarios de Manga eliminados')
}

const getAllMangasFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') }
  }
  const mangas = await Manga.find(filter ? nameFilterOptions : {}).populate({
    path: 'fans',
    model: 'Otaku',
    select: {
      _id: true,
      name: true,
      surname: true,
      email: true
    }
  })

  return mangas
}

const getMangaByIdFromDB = async (id) => {
  const manga = await Manga.findById(id).populate({
    path: 'fans',
    model: 'Otaku',
    select: {
      _id: true,
      name: true,
      surname: true,
      email: true
    }
  })
  return manga
}

const createMangaInDB = async (payload) => {
  const newManga = new Manga(payload)
  await newManga.save()

  return newManga
}

const deleteMangaFromDB = async (id) => {
  await Manga.deleteOne({ _id: id })
}

const updateMangaByIdInDB = async (id, payload) => {
  const oldManga = await Manga.findById(id)
  const newManga = new Manga(payload)

  newManga._id = id

  if (newManga.fans) {
    newManga.fans = [...oldManga.fans, ...newManga.fans]
  }

  const mangaUpdated = await Manga.findByIdAndUpdate(id, newManga, {
    new: true
  })

  return mangaUpdated
}

module.exports = {
  cleanMangaCollections,
  saveMangaDocuments,
  updateFansMangasInDB,
  cleanMangaPrivateFields,
  getAllMangasFromDB,
  getMangaByIdFromDB,
  createMangaInDB,
  deleteMangaFromDB,
  updateMangaByIdInDB
}
