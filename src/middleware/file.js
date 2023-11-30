const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'mangaApp',
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif']
  }
})

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware