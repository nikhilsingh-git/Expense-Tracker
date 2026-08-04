const jwt = require('jsonwebtoken')

const authMiddleWare = (req , res , next) =>{

    const token = req.cookies?.accessToken
    console.log("Cookies =>", req.cookies);
console.log("Headers =>", req.headers.cookie);
console.log("Token =>", req.cookies?.accessToken);
try{
       if(!token){
       return res.status(401).json({
            success :false,
            message:'User is not login !',
        })
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET)
    console.log(decoded)
      req.user = {id: decoded.id}
      next()
      

}catch(err){
   console.log("JWT Error =>", err.message);
    res.status(401).json({
        success:false,
        message:'login user not found , Login frist!',
        Error:err.message
    })
}

}


module.exports = authMiddleWare