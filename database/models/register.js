const mongoose = require('mongoose')
const loginMasterSchema = new mongoose.Schema({
    user_name:{type:String, required:true},
    user_email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
})
const Login = mongoose.model('Login',loginMasterSchema)
module.exports = Login