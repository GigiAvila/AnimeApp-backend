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

// CORS
app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, true)
    }
  })
)

// LIMITER
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  limit: 100,
  standardHeaders: false,
  legacyHeaders: false
})
app.use(limiter)

//  MIDDLEWARES DE BODY PARSER
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ limit: '1mb', extended: true }))

//Router
const mainRouter = require('./routes/indexRouter')
app.use('/api', mainRouter)

// Controlador de rutas no encontradas
app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Not found' })
})

// //Controlador de errores generales del servidor
app.use((err, req, res, next) => {
  console.log(' >>>> Server error:', err)
  res.status(500).json({ data: 'Interval Server Error' })
})

const PORT = 4001
app.listen(PORT, () => {
  console.log(
    `La aplicación está corriendo en el puerto http://localhost:${PORT}`
  )
})

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.disable('x-powered-by')
