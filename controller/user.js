const User = require('../model/user')

const register = async (req,res)=>{
    try{
        const user=new User({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email,
            mobileno:req.body.mobileno,
        })
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
            if(user.password==password){
                return res.status(201).send("Successfully loged in")
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

module.exports ={
    register,
    log
}