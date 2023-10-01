const Answer=require('../model/answer')

const ans= async(req,res)=>{
    const answer=new Answer({
        answer:req.body.answer,
        user:req.body.user,
        question:req.body.question
    })
    try{
        const ans=await answer.save()
        res.send("Question answered")
    }
    catch(error){
        res.status(500).send("Unable to answer question")
    }
}

module.exports={ 
    ans
 }