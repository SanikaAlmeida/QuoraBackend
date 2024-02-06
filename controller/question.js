const Question= require('../model/question')

const ask = async (req, res) => {
    try {
        const question = new Question({
            question: req.body.question,
            category: req.body.category,
            user: req.user._id
        });
        const postedQuestion = await question.save();
        
        res.json({ message: 'Question posted', postedQuestion: { _id: postedQuestion._id } });
    } catch (error) {
        res.status(500).send("Unable to ask question");
    }
};


const displayques= async(req,res)=>{
    try{
           const questions= await Question.find(req.query).populate('user')
           res.json(questions)
    }
    catch(error){
        res.send(error)
    }
}
const deletequestion=async(req,res)=>{
    try {
        const ques=await Question.findById(req.body.id)
        const q1=await ques.deleteOne()
        res.send("Question deleted successfully")
    } catch (error) {
        res.send("Error in question deletion")
    }
}
const updatequestion=async(req,res)=>{
    try {
        const user=await Question.findByIdAndUpdate(req.params.id,req.body,)
        res.send("Update done")
    } catch (error) {
        res.status(500).send("Upadation not done")
    }
}
module.exports={
    ask,
    displayques,deletequestion,updatequestion
}