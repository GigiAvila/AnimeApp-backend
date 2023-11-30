const seed = require('../seedData')
const bcrypt = require('bcrypt')
const {generateSign} = require('../config/jwt')
const Otaku = require('../model/otaku')

const cleanOtakuCollections = async () => {
  await Otaku.collection.drop()
  console.log('>>> Colección Otaku limpia!')
}



const saveOtakusDocuments = async () => {
  const otakusWithHashedPass = seed.otakus.map((otaku) => {
    return {
      ...otaku,
      password: bcrypt.hashSync(otaku.password, 10)
    }
  })

  const otakus = await Otaku.insertMany(otakusWithHashedPass)

  console.log('>>>> Documentos Otakus  guardados con éxito')

  return {
    otakus
  }
}


const updateOtakusFavoriteMangaInDB = async (animes, otakus) => {
  await Promise.all(
    otakus.map(async (otaku) => {
      const manga = animes.find(
        (manga) => manga._mangaId === otaku._favoriteManga
      )
      await otaku.updateOne({ _favoriteManga: manga._id })
    })
  )

  console.log(`>>>> Otakus' favoriteAnime actualizados`)
}

const cleanOtakuPrivateFields = async () => {
  await Otaku.updateMany(
    {},
    {
      $unset: {
        _userId: 1,
        _favoriteOtaku: 1
      }
    }
  )

  console.log('>>>>Campos utilitarios de Otaku eliminados')
}
const getAllOtakusFromDB = async (filter) => {
  const nameFilterOptions = {
    name: { $regex: new RegExp(filter, 'i') }
  }
  const otakus = await Otaku.find(filter ? nameFilterOptions : {}).populate({
    path: '_favoriteManga',
    model: 'Manga',
    select: {
      _id: true,
      name: true
    }
  })
  return otakus
}

const getOtakuByIdFromDB = async (id) => {
  const otaku = await Otaku.findById(id).populate({
    path: '_favoriteManga',
    model: 'Manga',
    select: {
      _id: true,
      name: true
    }
  })
  return otaku
}

const createOtakuInDB = async (payload) => {
  const newOtaku = new Otaku(payload)
  await newOtaku.save()
  return newOtaku
}

const deleteOtakuFromDB = async (id) => {
  await Otaku.deleteOne({ _id: id })
}

const updateOtakuByIdInDB = async (id, payload) => {
  const manga = await Otaku.findByIdAndUpdate(id, payload, {
    new: true
  }).populate({
    path: '_favoriteManga',
    model: 'Manga',
    select: {
      _id: true,
      name: true
    }
  })
  return manga
}

const loginOtakuInDB = async (payload) => {
  const otaku = await Otaku.findOne({ email: payload.email.toLowerCase() });

  if (!otaku) {
    console.log('>>>>> ⛑️this Otaku does not exist in DB');
    return { success: false, message: 'Otaku does not exist' };
  }

  if (bcrypt.compareSync(payload.password, otaku.password)) {
    const token = generateSign(otaku._id);
    console.log('>>>> Otaku is now logged in');
    return { success: true, message: 'Otaku is now logged in', token };
  } else {
    console.log('>>>> ⛑️ Passwords do not match');
    return { success: false, message: 'Passwords do not match' };
  }
};



module.exports = {
  cleanOtakuCollections,
  saveOtakusDocuments,
  updateOtakusFavoriteMangaInDB,
  cleanOtakuPrivateFields,
  getAllOtakusFromDB,
  getOtakuByIdFromDB,
  createOtakuInDB,
  deleteOtakuFromDB,
  updateOtakuByIdInDB,
  loginOtakuInDB,
}
