const express = require('express')
const controllers = require('../controllers/auth.controllers')
const authMiddleWare = require('../middlewares/auth.middleware')

const route = express.Router()

route.post('/register' , controllers.register)
route.post('/login',  controllers.login)
route.get('/details', authMiddleWare ,controllers.viweDetails)
route.post('/changePassword' , authMiddleWare, controllers.changePassword)
// route.post('/view' , controllers.viewUsers)
route.post('/income' , authMiddleWare , controllers.addIncome)
route.get('/getAllIncome' ,authMiddleWare , controllers.getAllIncome) 
route.delete('/deleteIncome/:id' ,authMiddleWare, controllers.deteleIncome)


module.exports = route