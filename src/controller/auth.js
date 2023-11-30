const { verifyJwt } = require('../config/jwt');
const { Otaku } = require('../model/otaku')

const confirmAccount = async (req, res, next) => {
  try {
    const { token } = req.params;
    const decodedToken = verifyJwt(token);

    await Otaku.findOneAndUpdate(
      { _userId: decodedToken.id },
      { $set: { verifyEmail: true } }
    );

  
    res.redirect('/success'); 
  } catch (error) {
    console.error('Error confirming account:', error);
    res.redirect('/error'); 
  }
};

module.exports = { confirmAccount };
