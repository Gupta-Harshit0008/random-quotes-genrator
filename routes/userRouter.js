const express=require('express');
const userController= require('../controllers/userController')


const userRouter =express.Router();
userRouter.route('/').get(userController.isLoggedin,userController.getAllUsers).post(userController.addNewUser)
userRouter.route('/login').post(userController.Login)
module.exports=userRouter;