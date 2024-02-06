const Answer=require('../model/answer')
const Question=require('../model/question')

const ans= async(req,res)=>{
    const answer=new Answer({
        answer:req.body.answer,
        user:req.user._id,
        question:req.body.question
    })
    try{
         const question= await Question.findById(req.body.question)
         question.answer.push(req.body.answer)
        const ans=await answer.save()
        await question.save()
        res.send({ message: 'Answer posted', ans: { _id: ans._id } });

    }
    catch(error){
        res.status(500).send("Unable to answer question"+error)
    }
}

const upvote=async(req,res)=>{
    try {
        const answer=await Answer.findById(req.params.id)
        if(!answer){
            return res.send("Wrong user id")
        }
        answer.upvote.push(req.user._id)
        await answer.save()
        res.send("Upvoting done")
    } catch (error) {
        res.status(500).send(error)
    }
}
const downvote=async(req,res)=>{
    try {
        const answer=await Answer.findById(req.params.id)
        if(!answer){
            return res.send("Wrong user id")
        }
        answer.downvote.push(req.user._id)
        await answer.save()
        res.send("Downvoting done")
    } catch (error) {
        res.status(500).send(error)
    }
}
const deleteans=async(req,res)=>{
    try {
        const ans=await Answer.findById(req.body.id)
        const q1=await ans.deleteOne()
        res.send("Answer deleted successfully")
    } catch (error) {
        res.send("Error in answer deletion")
    }
}
const updateanswer = async (req, res) => {
    try {
        const answer = await Answer.updateOne({ _id: req.params.id }, req.body);
        res.send("Update done");
    } catch (error) {
        res.status(500).send("Updation not done");
    }
};

const getanswer=async(req,res)=>{
    try {
        const ans =await Answer.find().populate('question')
        res.json(ans)
    } catch (error) {
        res.status(500).send("Couldn't get answers")
    }
}
module.exports={ 
    ans,upvote,downvote,deleteans,updateanswer,getanswer
 }