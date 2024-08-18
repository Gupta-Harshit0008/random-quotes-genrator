const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A User must have a username'],
        minleghth:4
    },
    email:{
        type:String,
        required:[true,'A user must have a email'],
        unique:[true,'A user must have a Unique email']
    },
    password:{
        type:String,
        required:[true, 'A user must have a Password'],
        minleghth:8,
        select:true
    }
})

const User=mongoose.model('User',userSchema)

module.exports=User