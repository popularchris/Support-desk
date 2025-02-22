const express=require('express')
const router=express.Router()
const {loginUser,registerUser,getMe}=require('../contollers/userController')
const {protect}=require('../middleware/authMiddleware')
// const {registerUser,loginUser,getMe}= require('../controller/usercotroller.js')
//  router.post('/',registerUser)
 router.post('/',registerUser)
 router.post('/login',loginUser)
 router.get('/me',protect,getMe)
 

 module.exports=router