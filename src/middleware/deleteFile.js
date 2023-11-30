const cloudinary = require('cloudinary').v2

const deleteFile = (imgUrl) => {
  const imgSplited = imgUrl.split('/')
  const nameSplited = imgSplited.at(-1).split('.')
  nameSplited[0]
  const folderSplited = imgSplited.at(-2)

  const public_photoId = `${folderSplited}/${nameSplited[0]}`

  cloudinary.uploader.destroy(public_photoId, () => {
    console.log('>>>> 📷 Image replace for the new one in cloudinary')
  })
}

module.exports = {
  deleteFile
}