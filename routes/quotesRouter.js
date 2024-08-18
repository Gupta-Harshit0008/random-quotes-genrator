const express=require('express')
const quoteController=require('../controllers/quotesController')
const Quotes = express.Router();


Quotes.route('/').post(quoteController.getQuotes)

module.exports=Quotes;