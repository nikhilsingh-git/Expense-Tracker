const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        default: 0,
        required: true 
    },
    category: {
        type: String,
        required: true
    },
    paymentMode: {
        type: String,
        required: true,
        enum: ['Cash', 'Credit Card', 'Debit Card', 'UPI', 'Net Banking'] 
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true
    },
    discription: { 
        type: String,
        default: ""
    },
    date: {
        type: Date, 
        default: Date.now 
    }
}, { timestamps: true });


const expenseModel = mongoose.model('expense' , expenseSchema)


module.exports = expenseModel