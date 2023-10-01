const {ask}= require('../controller/question')
const {displayques}=require('../controller/question')
const express = require('express')
const router = express.Router()

router.post('/ask',ask)
router.get('/display',displayques)

module.exports=router