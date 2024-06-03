import jwt from "jsonwebtoken"

const authMiddleWare=async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorized Login Again"})
    }
    try{
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId=tokendecode.id;
        next();
    }catch(error){
      console.log(error);
      res.json({success:false,message:"Error"})
    }
}


export default authMiddleWare;