const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()

const url=process.env.url
const port=process.env.port

const app=express()
app.use(express.json())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
  console.log('connected')
}).catch((err)=>{
  console.log(err)
})

const userRouter = require('./routes/user')
app.use('/user',userRouter)

const questionRouter=require('./routes/question')  
app.use('/question',questionRouter)

const answerRouter=require('./routes/answer')  
app.use('/answer',answerRouter)

  app.listen(port,()=>{
    console.log("Running on port 8080")
  })