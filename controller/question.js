const Question= require('../model/question')

const ask=async (req,res)=>{
    try{
        const question=new Question({
            question:req.body.question,
            category:req.body.category,
            user:req.body.user
        })
        const ques=await question.save()
        res.send("Question posted")
    }
    catch(error){
        res.status(500).send("Unable to ask question")
    }
}

const displayques= async(req,res)=>{
    try{
           const questions= await Question.find(req.query)
           res.json(questions)
    }
    catch(error){
        res.send(error)
    }
}
module.exports={
    ask,
    displayques
}