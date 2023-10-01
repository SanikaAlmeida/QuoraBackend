const {ans}= require('../controller/answer')
const express = require('express')
const router = express.Router()

router.post('/answer',ans)

module.exports=router