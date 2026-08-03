const express = require('express')
const connectDB = require('./db/db')
const cookieParser = require('cookie-parser')
const route = require('./routes/auth.route')
const profileRoute = require('./routes/profile.route')
const expenseRoute = require('./routes/expense.route')
const cors = require('cors')


require('dotenv').config()

const app = express()

connectDB()

app.use(express.json());
app.use(express.urlencoded({extended:true ,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://expense-tracker-eight-rho-36.vercel.app"
  ],
  credentials: true
}));

app.use('/api/auth' ,route)
app.use('/api/auth' ,profileRoute)
app.use('/api/details' ,expenseRoute)
app.use('/api/expense' ,expenseRoute)

module.exports = app