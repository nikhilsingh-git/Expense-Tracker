const profileModel = require('../models/profile.model')
const userModel = require('../models/user.model')
const Wallet = require('../models/wallet.model')
const {uploadFile} = require('../servies/imagekit.servies')


const profile = async(req ,res)=>{

   try {
     const {fullName,email,gender,dob,occupation,currency,monthlyBudget, address, bio } = req.body
     const inputFile = req.file
     const userId = req.user.id
 
     if(!inputFile){
         return res.status(404).json({
             message:"Please send image ,Image not Found"
         })
     }

     if(isNaN(monthlyBudget)){
        return res.status(400).json({
            success:false,
            message:'Monthly Budget in not vailid!'
        })
     }
 
         const result = await uploadFile(req.file.buffer.toString("base64"))
 
         const userProfile = await profileModel.create({
             userId:userId,
             inputFile: result.url,
             fullName,
             email,
             gender: gender || undefined, 
             dob,
             occupation,
             currency: currency || undefined, 
             monthlyBudget: monthlyBudget ? Number(monthlyBudget) : 0, 
             address,
             bio
         });
 
         const userUpdated = await userModel.findOneAndUpdate(
             {_id:userId},
             {isProfileCreated:true},
             {new:true , upsert:true}
          )
             
            await Wallet.create({
                userId: userId,
                totalWallet:monthlyBudget 
            })

         return res.status(201).json({
         message:'profile created!',
         userProfile,
         userUpdated
          })
 
   } catch (err) {
     console.log(`file not read ${err}`)
        res.status(404).json({
            success:false,
            message:"Profile Data not found!",
            err:err.message
        })
   }

}

const getprofileData = async(req , res)=>{
    try {
        const userId = req.user.id

        if(!userId){
            return res.status(400).json({
                success:false,
                message:"User is not login"
            })
        }

       const profileData = await profileModel.findOne({userId})

       if(!profileData){
        return res.status(400).json({
            success:false,
            message:'profile not found!'
        })
       }

       res.status(200).json({
        success:true,
        message:'profile fatched successfully!',
        profileData
       })

    } catch (error) {
        console.log("error" , error)
        res.status(401).json({
            success:false,
            message:"somthing went worng!",
            error:error.message
        })
    }
}

module.exports = {profile , getprofileData} 