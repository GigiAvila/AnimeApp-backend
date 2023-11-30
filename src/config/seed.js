const {
  cleanMangaCollections,
  saveMangaDocuments,
  updateFansMangasInDB,
  cleanMangaPrivateFields
} = require('../repositories/manga')
const {
  cleanOtakuCollections,
  saveOtakusDocuments,
  updateOtakusFavoriteMangaInDB,
  cleanOtakuPrivateFields
} = require('../repositories/otaku')

const seedFunctions = async () => {
  await cleanMangaCollections()
  await cleanOtakuCollections()
  const { mangas } = await saveMangaDocuments()
  const { otakus } = await saveOtakusDocuments()
  await updateFansMangasInDB(mangas, otakus)
  await updateOtakusFavoriteMangaInDB(mangas, otakus)
  cleanMangaPrivateFields()
  cleanOtakuPrivateFields()
}

module.exports = seedFunctions
