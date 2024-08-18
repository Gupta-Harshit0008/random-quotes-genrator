const user=require('../models/userModel')

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
    
        res.status(200).json({
            status:'success',
            message:'new user Added',
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