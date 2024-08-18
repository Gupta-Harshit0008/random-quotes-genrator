const quotes=require('../models/quotesModel')

// get a random quote currently list is 20 can be updated using mongodb atlas in future
exports.getQuotes=async (req,res)=>{
    try{
        const data= await quotes.find()
        let randomNumber = Math.floor(Math.random() * 20);  // need to update *20 in case list of quotes increse
        randomQuote=data[0].Data[randomNumber]
        if(data){
            res.status(200).json({
                status:'success',
                message:'qutoes fetched successfully',
                quote:randomQuote
            })
        }
        else{
            res.status(404).json({
                status:'fail',
                message:'no quotes found'
            })
        }
        
    }

    catch(err){
        res.status(404).json({
            status:'fail',
            message:'no quotes found'
        })
    }
    
}
