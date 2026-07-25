const express = require('express')
const controller = require('../controllers/expense.controller')
const authMiddleWare = require('../middlewares/auth.middleware')

const expenseRoute = express.Router()

expenseRoute.post('/expense' , authMiddleWare , controller.expense )
expenseRoute.get('/getExpense',authMiddleWare, controller.getExpense)
expenseRoute.patch('/edit/:id', authMiddleWare, controller.updateExpense)
expenseRoute.delete('/deleteExpense/:id' ,authMiddleWare,controller.deleteExpense )
expenseRoute.get('/getWalletData' ,authMiddleWare , controller.getWalletData)
expenseRoute.get('/monthlyExpense' , authMiddleWare , controller.monthlyExpense)

module.exports = expenseRoute





















// import {Router} from 'express'
// import {updateExpense} from '../controllers/expense.controller'

// const router = Router()

// router.route('/update').patch(updateExpense)

// export default router