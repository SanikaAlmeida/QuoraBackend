const User = require('../model/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const sendmail=require('./nodemailer')

const register = async (req,res)=>{
    try{
        const user=new User({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            mobileno:req.body.mobileno,
        })
        user.password=await bcrypt.hash(user.password, 10)
        const user1=await user.save()
        res.send("Sign up done successfully")
    }
    catch(error){
        res.status(500).send(error)
    }
}

const log= async(req,res)=>{
    try{
        const email=req.body.email
        const password=req.body.password

        const user=await User.findOne({email:email})
        if(user){
            const validpassword= await bcrypt.compare(password, user.password)
            if(validpassword){
                const token=jwt.sign({_id:user._id},process.env.TOKEN_KEY,{expiresIn: "1h"})
                res.json(token);

                sendmail();
                
            }else{
                return res.send("Incorrect")
            }
        }
        else{
            return res.status(201).send("User not found")
        }

    }
    catch(error){
        res.status(500).send(error)
    }
}

const follow=async(req,res)=>{
    try {
        const followuser= await User.findById(req.params.id)
        const followinguser= await User.findById(req.user._id)
        if(!followuser || !followinguser){
            return res.send("Wrong user id")
        }
        followuser.followers.push(req.user._id)
        followinguser.following.push(req.params.id)
        await followuser.save()
        await followinguser.save()
        res.send("Followed")
    } catch (error) {
        res.status(500).send(error)        
    }
}

const unfollow=async(req,res)=>{
    try {
        const followuser= await User.findById(req.params.id)
        const followinguser= await User.findById(req.user._id)
        if(!followuser || !followinguser){
            return res.send("Wrong user id")
        }
        followuser.followers.pull(req.user._id)
        followinguser.following.pull(req.params.id)
        await followuser.save()
        await followinguser.save()
        res.send("Unfollowed")
    } catch (error) {
        res.status(500).send(error)        
    }
}
module.exports ={
    register,
    log,
    follow, unfollow
}