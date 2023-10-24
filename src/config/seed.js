const {
  cleanAnimeCollections,
  saveAnimeDocuments,
  updateFansAnimesInDB,
  cleanAnimePrivateFields
} = require('../repositories/anime')
const {
  cleanOtakuCollections,
  saveOtakusDocuments,
  updateOtakusFavoriteAnimeInDB,
  cleanOtakuPrivateFields
} = require('../repositories/otaku')

const seedFunctions = async () => {
  await cleanAnimeCollections()
  await cleanOtakuCollections()
  const { animes } = await saveAnimeDocuments()
  const { otakus } = await saveOtakusDocuments()
  await updateFansAnimesInDB(animes, otakus)
  await updateOtakusFavoriteAnimeInDB(animes, otakus)
  cleanAnimePrivateFields()
  cleanOtakuPrivateFields()
}

module.exports = seedFunctions
