const express=require('express')
const router=express.Router()
const User=require('../model/user')
const Question=require('../model/question')
const Answer=require('../model/answer')

router.post('/signup',async(req,res)=>{
    const user=new User({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        mobileno:req.body.mobileno,
    })
    try{
        const user1=await user.save()
        res.send("Sign up done successfully")
    }
    catch(error){
        res.status(500).send("Error while signing up")
    }
})
router.post('/login',async(req,res)=>{
    try{
        const email=req.body.email
        const password=req.body.password

        const useremail=await User.find({email:email})
        if(useremail.password==password){
            res.status(201).send("Successfully loged in")
        }else{
            res.send("Incoorrect password")
        }
    }
    catch(error){
        res.status(400).send("Incorrect email entered")
    }
})
router.post('/ask',async(req,res)=>{
    const question=new Question({
        question:req.body.question,
        category:req.body.category,
        user:req.body.user
    })
    try{
        const ques=await question.save()
        res.send("Question posted")
    }
    catch(error){
        res.status(500).send("Unable to ask question")
    }
})
router.post('/answer',async(req,res)=>{
    const answer=new Answer({
        answer:req.body.answer,
        user:req.body.user,
        question:req.bbody.question
    })
    try{
        const ans=await answer.save()
        res.send("Question answered")
    }
    catch(error){
        res.status(500).send("Unable to answer question")
    }
})

module.exports= router
