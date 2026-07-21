const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
    addIncome:{
     type:Number,
     default:0
    },
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }

},{timestamps:true})

const Income = mongoose.model('Income' , incomeSchema)

module.exports = Income