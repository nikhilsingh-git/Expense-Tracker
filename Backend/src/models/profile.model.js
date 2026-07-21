const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    inputFile:{
        type:String,
        default:""
    },
    fullName:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:['Male' , 'Female' , 'Other'],
        default:'Male'
    },
    dob:{
        type:Date,
    },
    occupation:{
        type:String,
        default:""
    },
    currency:{
        type:String,
        enum:['INR' ,'USD','EUR','GBP',],
        default:'INR'
    },
    monthlyBudget:{
        type:Number,
        default:0
    },
    address:{
        type:String,
        default:""
    },
    bio:{
        type:String,
        default:""
    }
},{ timestamps: true })


const profileModel = mongoose.model('profile', profileSchema)

module.exports = profileModel