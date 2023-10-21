const mongoose = require('mongoose')

mongoose.set('strict', false)
mongoose.set('strictQuery', false)
mongoose.set('strictPopulate', false)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('>>>> Conectado a Mongo DB')
  })
  .catch((err) => {
    console.log('Error conectado a la DB', err)
    process.exit(1)
  })
