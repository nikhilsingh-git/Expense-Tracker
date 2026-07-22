const expenseModel = require('../models/expense.model')
const Wallet = require('../models/wallet.model')
const mongoose = require('mongoose')


const expense = async(req , res)=>{

    try{
          const{amount,category,paymentMode,client,discription,date} = req.body

        const expenseAmount = Number(amount) ;
        const userId = req.user.id

         if (!amount || !category || !paymentMode) {
            return res.status(400).json({
                message: 'Mandatory expense details are missing!'
            });
        }

        if(isNaN(expenseAmount)){
            return res.status(400).json({
                success:false,
                message:'Amount must be a valid number.'
            })
        }

        if(expenseAmount < 0){
            return res.status(400).json({
                success:false,
                message:"Amount cannot be negative!"
            })
        }

        if(expenseAmount === 0){
            return res.status(400).json({
                success:false,
                message:'Amount Zero not vaild!'
            })
        }

        const updateWallet = await Wallet.findOneAndUpdate({userId},{
            $inc:{totalWallet:-expenseAmount}
        },{new:true})
    
        if(!updateWallet){
            return res.status(400).json({
                success:false,
                message:"Wallet not found!"
            })
        }

    const expenseDetails = await expenseModel.create({
        amount:expenseAmount,
        category,
        paymentMode,
        client: req.user.id,
        discription,
        date
    })

    res.status(201).json({
    message:"expense added successfully!",
    expenseDetails,
    updateWallet
    })



    }catch(err){
    console.log('details not found !' , err)
    
    return res.status(500).json({ 
            success: false,
            message: "Internal server error while saving details.",
            error: err.message
        });
 }
  
}

const getExpense = async(req , res) =>{

    try{     
    const userId = req.user.id
     const expense = await expenseModel.find( {client:req.user.id }).populate('client' , 'username email') 
    

     return res.status(200).json({
        success:true,
        message:'Your Expense !',
        expense
     })


    }catch(error){
        console.log('Expense not found ! \n create expense now' , error)
        res.status(400).json({
            success:false,
            message:'expense not found !',
            error : error.message
        })
    }

}

const updateExpense = async(req , res)=>{

  try {
    
      const expenseId = req.params.id
      const userId = req.user.id

        const{amount,category,paymentMode, discription, date} = req.body

     const updatedExpense = await expenseModel.findOneAndUpdate(
        { _id: expenseId ,
            client:userId
         }, 
        {
            amount,category,paymentMode, discription, date
        },
        { returnDocument: 'after' , 
          runValidators: true
        }
     )

     if(!updatedExpense){ 
       return res.status(400).json({
            success:false,
            message:'Expense is not updated!'
        })
     }

       res.status(201).json({
        success:true,
        message:'updated successfully!',
        data: updatedExpense

       })
  } catch (error) {

     console.log(`somthing want worng! ${error}`)
     res.status(400).json({
        success : false,
        message:'Not updated Expenses!',
        data : null,
        error:error.message
     })
  }

}

const deleteExpense = async (req,res)=>{   
    
    try {
         const id = req.params.id
         const userId = req.user.id

         const expenseDeleted = await expenseModel.findOneAndDelete({
            _id:id,
            client:userId
         })

         if(!expenseDeleted){
            return res.status(404).json({
                success:false,
                message:'expense not found!',
            })
         }

         return res.status(200).json({
            success:true,
            message:'expense deleted successfully!',
            deletedData:expenseDeleted
         })
    } catch (error) {
        console.log(`Expense not deleted! ${error}`)
         res.status(500).json({
            success:false,
            message:'Exppense is not deleted!',
            error:error.message
        })
    }
}

const getWalletData = async (req,res)=>{
    try {
        const userId = req.user.id
        if(!userId){
            return res.status(401).json({
               success:false,
               message:'User is not login!' 
            })
        }

        const walletData = await Wallet.findOne({userId})

        if(!walletData){
            return res.status(404).json(
                {success:false,
                message:'User Wallet is not created!'}
            )
        }

        res.status(200).json({
            success:true,
            message:'Wallet data fetched! ',
            walletData
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Internal server error : Wallet data not found!'
        })
    }
}

const monthlyExpense = async(req ,res) =>{
try {
    const userId = req.user.id
     const today = new Date()

     const firstDate = new Date(
         today.getFullYear(),
         today.getMonth(),
         1
     )

     const nextMonth = new Date (
        today.getFullYear(),
        today.getMonth() + 1,
        1
     )

     const result = await expenseModel.aggregate([
        {
            $match:{
                client : new mongoose.Types.ObjectId(userId),
                date:{
                 $gte: firstDate,
                  $lt: nextMonth   
                }
            }
        },{
            $group:{
                _id:null,
                totalExpense:{
                    $sum: "$amount"
                }
            }
        }
     ])

     const monthlyExpenseAmount = result.length > 0 ? result[0].totalExpense : 0

     res.status(200).json({
        success:true,
        message:"Monthly Expense Here!",
        monthlyExpenseAmount
     })

} catch (error) {
    res.status(500).json({
        success:false,
        message:'Somthing went worng!',
        error:error.message
    })
}
}


module.exports= { 
                  expense ,
                  getExpense,
                  updateExpense,
                  deleteExpense,
                  getWalletData,
                  monthlyExpense
                }