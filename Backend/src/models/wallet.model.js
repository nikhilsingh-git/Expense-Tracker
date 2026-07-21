const mongoose = require('mongoose')

const welletSchema = new mongoose.Schema({
    totalWallet:{
        type:Number,
        default:0
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required : true
    }
    
} ,{timestamps:true})


const Wallet  =  mongoose.model("Wallet" , welletSchema)

module.exports = Wallet