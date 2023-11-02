const {register} = require('../controller/user')
const {log,follow,unfollow,uploadprofilepic,deleteuser,getfollower,updateuser,getusers}= require('../controller/user')
const authenticatetoken=require('../middleware/authenticate')
const upload=require('../middleware/multer')
const express = require('express')
const router = express.Router()

router.post('/signup',register)
router.post('/login',log)
router.post('/follow/:id',authenticatetoken,follow)
router.post('/unfollow/:id',authenticatetoken,unfollow)
router.post('/uploadpic',authenticatetoken,upload.single('image'),uploadprofilepic)
router.delete('/deleteuser',authenticatetoken,deleteuser)
router.get('/getfollower',authenticatetoken,getfollower)
router.patch('/updateuser',authenticatetoken,updateuser)
router.get('/getusers',authenticatetoken,getusers)

module.exports = router 