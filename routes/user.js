const {register} = require('../controller/user')
const {log}= require('../controller/user')
const express = require('express')
const router = express.Router()

router.post('/signup',register)
router.post('/login',log)

module.exports = router 