const app=require('./app')
const dontenv=require('dotenv')
const mongoose=require('mongoose')


dontenv.config({path:'./config.env'})

//for database string
const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

// for database connection
mongoose.connect(DB).then(con=>{
    console.log('Database connection successfull...')
})

const port=process.env.PORT

app.listen(port,()=>{
    console.log(`server is started at ... ${port}`)
})