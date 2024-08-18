const express=require('express')
const quoteController=require('../controllers/quotesController')
const userController=require('../controllers/userController')
const Quotes = express.Router();


Quotes.route('/').post(userController.isLoggedin,quoteController.getQuotes)

module.exports=Quotes;