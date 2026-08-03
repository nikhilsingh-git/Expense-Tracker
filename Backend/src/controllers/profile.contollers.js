const profileModel = require('../models/profile.model')
const userModel = require('../models/user.model')
const Wallet = require('../models/wallet.model')
const {uploadFile} = require('../servies/imagekit.servies')


const profile = async(req ,res)=>{

     const {fullName,email,gender,dob,occupation,currency,monthlyBudget, address, bio } = req.body
     const inputFile = req.file
     const userId = req.user.id
 
     if(isNaN(monthlyBudget)){
        return res.status(400).json({
            success:false,
            message:'Monthly Budget in not vailid!'
        })
     }
 
        const result = req.file ? await uploadFile(req.file.buffer.toString("base64")) : { url: "" };
 
         const userProfile = await profileModel.create({
             userId:userId,
             inputFile: result.url || "",
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
             {returnDocument: "after" , upsert:true}
          )
             
            await Wallet.create({
                userId: userId,
                totalWallet: monthlyBudget ? Number(monthlyBudget) : 0
            })

         return res.status(201).json({
         message:'profile created!',
         userProfile,
         userUpdated
          })


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

const editProfile = async(req ,res) =>{
    try {
        const userId = req.user.id
         const {fullName,email,gender,dob,occupation,currency,monthlyBudget, address, bio } = req.body
        if(!userId){
        return res.status(400).json({
            success:false,
            message:"User is not login"
            
        })
    }

    const updateData ={
        ...req.body,
    }
    if(req.file){
         const result = await uploadFile(req.file.buffer.toString("base64"))
        updateData.inputFile = result.url
    }

    const updatedProfile = await profileModel.findOneAndUpdate(
        {
        userId:userId
        },
        {
            $set:updateData
        },
        {
            new:true , runValidators:true
        }
    )

    await Wallet.findOneAndUpdate(
        { userId: userId},
        {totalWallet: monthlyBudget && Number(monthlyBudget)},
        {
            new:true
        }
        )

    if(!updatedProfile){
        return res.status(400).json({
            success:false,
            message:"Profile not found!"
        })
    }

res.status(201).json({
    success:true,
    message:"Profile Updated!",
    updatedProfile
})
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Somthing want worng!",
            error: error.message
        })
    }
}


module.exports = {profile , getprofileData , editProfile}