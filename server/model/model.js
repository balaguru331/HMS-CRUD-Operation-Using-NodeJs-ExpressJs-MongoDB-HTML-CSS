const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: String,
        required: true
    },
    gender: String,
    cell:{
        type: String,
        required: true,
        unique: true
    },
    dob:{
        type: String,
        required: true
    },
    marital:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

const Userdb =mongoose.model('userdbs',schema)

module.exports = Userdb;


