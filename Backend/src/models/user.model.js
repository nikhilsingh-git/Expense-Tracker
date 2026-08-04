const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,  
        trim: true, 
        minLength: [3, "Username must be at least 3 characters"],
        maxLength: [30, "Username cannot exceed 30 characters"] 
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,     

    },
    password:{
        type:String,
        required:true,
        minLength:[6,"Password must be at least 6 characters long" ],
        
    },
    isProfileCreated:{
        type:Boolean,
        default:false
    }
},{ timestamps: true })


const userModel = mongoose.model("user" , userSchema)

module.exports = userModel