const {ask}= require('../controller/question')
const {displayques}=require('../controller/question')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/ask',authenticatetoken,ask)
router.get('/display',authenticatetoken,displayques)

module.exports=router