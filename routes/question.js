const {ask}= require('../controller/question')
const {displayques,deletequestion,updatequestion}=require('../controller/question')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/ask',authenticatetoken,ask)
router.get('/display',authenticatetoken,displayques)
router.delete('/deletequestion',authenticatetoken,deletequestion)
router.patch('/updatequestion',authenticatetoken,updatequestion)

module.exports=router