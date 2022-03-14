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
        return res.send(201).json({validUser})
    }
    catch(err){
        return res.status(400).send("error: "+ err)
    }
})

module.exports = loginRoute
