const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/devOpsDemoProject",{useNewUrlParser:true, useUnifiedTopology: true}).then(()=>{
    console.log("Database connected to devOpsDemoProject.... ");
}).catch((err)=>{
    console.log(err);
})

module.exports = mongoose
