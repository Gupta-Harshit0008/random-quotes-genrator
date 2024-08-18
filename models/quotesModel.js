const mongoose=require('mongoose')

const quotesSchema=new mongoose.Schema({
    Data:{
        type:[String]
    }
})

const Quotes= mongoose.model('Quotes',quotesSchema)

module.exports=Quotes;