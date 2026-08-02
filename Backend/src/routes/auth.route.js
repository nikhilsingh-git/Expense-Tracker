const express = require('express')
const controllers = require('../controllers/auth.controllers')
const authMiddleWare = require('../middlewares/auth.middleware')

const route = express.Router()

route.post('/register' , controllers.register)
route.post('/login',  controllers.login)
route.post('/logout' , authMiddleWare , controllers.logout)
route.get('/details', authMiddleWare ,controllers.viweDetails)
route.post('/changePassword' , authMiddleWare, controllers.changePassword)
route.get('/isUserLogin' , authMiddleWare , controllers.isUserLogin)
// route.post('/view' , controllers.viewUsers)
route.post('/income' , authMiddleWare , controllers.addIncome)
route.get('/getAllIncome' ,authMiddleWare , controllers.getAllIncome) 
route.delete('/deleteIncome/:id' ,authMiddleWare, controllers.deteleIncome)
route.patch('/editIncome/:id' , authMiddleWare , controllers.editIncome)
route.get('/monthlyIncome' , authMiddleWare , controllers.monthlyIncome)

module.exports = route