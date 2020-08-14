const express=require('express')
const router=express.Router()
const User=require('../models/user')
const jwt=require('jsonwebtoken')
//register
router.post('/register',(req,res,next) => {
    let newUser=new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })

    User.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success:false,msg:'falid to register user'});
        }else{
            res.json({success:true,msg:'User registered!'})
        }
    })
})

//profile
router.get('/profile',(req,res,next)=>{
    res.send('PROFILE')
})

//authenticate
router.get('/authenticate',(req,res,next)=>{
    res.send('AUTHENTICATE')
})


router.get('//',(req,res,next)=>{
    res.send('hi')
})

module.exports = router;