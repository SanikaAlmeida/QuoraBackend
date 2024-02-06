const mongoose=require('mongoose')
require('dotenv').config()
const User = require("../model/user.js")
const Answer = require("../model/answer.js")
const Question = require("../model/question.js")
const Comment = require("../model/comment.js")

const url=process.env.url

const dbconnect= async()=>{
    await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
        console.log('connected')
      }).catch((err)=>{
        console.log(err)
      })
}
const dbupdate = async()=>{
  await User.deleteMany({});
  await Answer.deleteMany({});
  await Question.deleteMany({});
  await Comment.deleteMany({});
}

module.exports= {dbconnect,dbupdate};