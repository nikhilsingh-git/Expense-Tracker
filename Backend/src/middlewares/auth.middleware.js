const jwt = require('jsonwebtoken')

const authMiddleWare = (req , res , next) =>{

    const token = req.cookies?.accessToken

try{
       if(!token){
       return res.status(401).json({
            success :false,
            message:'User is not login !',
        })
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET)
  
      req.user = {id: decoded.id}
      next()
      

}catch(err){
    res.status(401).json({
        success:false,
        message:'login user not found , Login frist!',
        Error:err.message
    })
}

}


module.exports = authMiddleWare