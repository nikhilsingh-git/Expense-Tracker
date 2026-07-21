const express = require('express')
const profileController = require('../controllers/profile.contollers')
const upload = require('../middlewares/multer.middleware')
const authMiddleWare = require('../middlewares/auth.middleware')


const profileRoute = express.Router()

  profileRoute.post('/profile',authMiddleWare, upload.single('inputFile'), profileController.profile)
  profileRoute.get('/getProfileData', authMiddleWare, profileController.getprofileData)


module.exports = profileRoute