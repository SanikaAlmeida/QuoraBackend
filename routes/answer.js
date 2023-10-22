const {ans}= require('../controller/answer')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/answer',authenticatetoken,ans)

module.exports=router