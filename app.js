const express=require('express');
const morgan = require('morgan');
const quotesRouter=require('./routes/quotesRouter')
const userRouter=require('./routes/userRouter')

const app=express();
app.use(express.json())

//middlewares
app.use(morgan('dev'))


// routes
app.use('/api/v1/qutoes',quotesRouter)
app.use('/api/v1/users',userRouter)


module.exports=app;
