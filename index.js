const express = require('express')
const app= express()
const cors = require('cors')
app.use(cors())
const mongoose = require('./database/mongoose')
app.use(express.json())

const RegisterRouter = require('./api/register')
const LoginRouter = require('./api/login') 

app.use("/login",LoginRouter)
app.use("/register",RegisterRouter)


port = 3003
app.listen(port,()=>{
    console.log(`app is listenting to ${port}`);
})