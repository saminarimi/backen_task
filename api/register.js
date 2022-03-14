const express = require('express')
const registerRoute = express.Router()
const bcrypt = require('bcryptjs')
const Register = require('../database/models/register')


registerRoute.post('/', async (req, res) => {
    const emailExist = await Register.findOne({user_email:req.body.user_email})
    if(emailExist) return res.status(400).send("User email already exists.")

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password,salt)
    const newUser = new Register({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        password:hashPassword
    })
    try{
        const userSaved = newUser.save();
        res.send(userSaved._id)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = registerRoute
