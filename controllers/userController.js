const user=require('../models/userModel')
const jwt=require('jsonwebtoken')
const util=require('util')

const signToken= id=>{
    return jwt.sign({id:id},process.env.JWT_SECERT,{expiresIn:process.env.JWT_EXPIRY})  
} 

exports.getAllUsers  = async(req,res)=>{
    const userData=await user.find()
    res.status(200).json({
        status:'success',
        userData
    })
}

exports.addNewUser= async(req,res)=>{
    try{
        const newUser=await user.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password})
   const token= signToken(newUser._id)
            
        res.status(200).json({
            status:'success',
            message:'new user Added',
            token,
            newUser
        })
    }
    catch(err){
        res.status(400).json({
            status:'failure',
            message:'please enter all required fileds',
            err
        })
    }
}
exports.Login= async(req,res)=>{
    const email=req.body.email
    const password=req.body.password
// checks if email and password are passed 
    if(!email || !password){ 
        res.status(400).json({
            status:'failure',
            message:'please enter email and password'
        })
    }
    // searches for a user using email
    const loginuser= await user.findOne({email}) 
    // validates entered email and password 
    if(!loginuser || !(password === loginuser.password)){
            res.status(401).json({
                status:'Unautorized',
                message:'you have entered a wrong email or password'
            })
    }
    // if all conditions satisfies set token on everylogin
    const token=signToken(loginuser._id)
    res.status(200).json({
        status:'success',
        token
    })
}
// checks if user is loggedin or not
exports.isLoggedin=async (req,res,next)=>{
 let token;
 if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
     token= req.headers.authorization.split(' ')[1];
 }
    if(!token){
        res.status(401).json({
            status:'unauthorized',
            message:'You are not loggedin please login'
        })
    }
  const decoded= await util.promisify(jwt.verify)(token,process.env.JWT_SECERT);
  next();
}