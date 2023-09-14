const mongoose = require('mongoose')



var userschema = new mongoose.Schema({
    emailid:{
        type:String,
        required:true,
        unique:true
    },
    newpwd:{
        type:String,
        required:true
    },
    confirmpwd:{
        type:String,
        required:true
    }
})

const Newuserdb =mongoose.model('logindb',userschema)

module.exports = Newuserdb;