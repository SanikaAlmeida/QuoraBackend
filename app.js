const express=require('express')
const {dbconnect}=require('./config/db')
require('dotenv').config()

const port=process.env.port

const app=express()
app.use(express.json())
dbconnect()

const userRouter = require('./routes/user')
app.use('/user',userRouter)

const questionRouter=require('./routes/question')  
app.use('/question',questionRouter)

const answerRouter=require('./routes/answer')  
app.use('/answer',answerRouter)

const commentRouter=require('./routes/comment')  
app.use('/comment',commentRouter)

  app.listen(port,()=>{
    console.log("Running on port 8080")
  })

module.exports=app