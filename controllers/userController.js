exports.getAllUsers =(req,res)=>{
    res.status(200).json({
        status:'success',
        message:'all users fetched'
    })
}

exports.addNewUser= (req,res)=>{
    res.status(200).json({
        status:'success',
        message:'new user Added'
    })
}