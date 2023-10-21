require('dotenv').config()
const express = require('express')
const app = express()
require('./config/db')
const cors = require('cors')
const { rateLimit } = require('express-rate-limit')
const {
  cleanAnimeCollections,
  saveAnimeDocuments,
  updateFansAnimesInDB,
  cleanAnimePrivateFields
} = require('./repositories/anime')
const {
  cleanOtakuCollections,
  saveOtakusDocuments,
  updateOtakusFavoriteAnimeInDB,
  cleanOtakuPrivateFields
} = require('./repositories/otaku')

// CLEAN AND INSERT DOCUMENTS IN COLLECTIONS

const main = async () => {
  await cleanAnimeCollections()
  await cleanOtakuCollections()
  const { animes } = await saveAnimeDocuments()
  const { otakus } = await saveOtakusDocuments()
  await updateFansAnimesInDB(animes, otakus)
  await updateOtakusFavoriteAnimeInDB(animes, otakus)
  cleanAnimePrivateFields()
  cleanOtakuPrivateFields()
}

main()
  .then(() => {
    console.log('Script terminado')
  })
  .catch((err) => {
    console.log('Error lanzando el script!', err)
    process.exit(1)
  })

const PORT = 4001
app.listen(PORT, () => {
  console.log(
    `La aplicación está corriendo en el puerto http://localhost:${PORT}`
  )
})
