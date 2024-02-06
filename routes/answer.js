const {ans,upvote,downvote,deleteans,updateanswer,getanswer}= require('../controller/answer')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/answer',authenticatetoken,ans)
router.post('/upvote/:id',authenticatetoken,upvote)
router.post('/downvote/:id',authenticatetoken,downvote)
router.delete('/deleteanswer',authenticatetoken,deleteans)
router.patch('/updateanswer',authenticatetoken,updateanswer)
router.get('/getanswers',authenticatetoken,getanswer)

module.exports=router