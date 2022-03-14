const express = require('express')
const loginRoute = express.Router()
const bcrypt = require('bcryptjs')
const Login = require('../database/models/register')
loginRoute.post('/', async (req,res)=>{
    try{
        const validUser = await Login.findOne({user_email:req.body.user_email})
        if(!validUser) return res.status(400).send("User email doesn't exist")
        const validPassword = await bcrypt.compare(req.body.password,validUser.password)
        if(!validPassword) return res.status(400).send("Please enter the correct password")
        return res.status(200).json({user_email:validUser.user_email,user_name:validUser.user_name})
    }
    catch(err){
        console.log(err);
        return res.status(500).send("error: "+ err)

    }
})

module.exports = loginRoute
