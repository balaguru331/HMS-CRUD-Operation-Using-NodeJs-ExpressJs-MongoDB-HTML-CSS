const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    staff_name:{
        type: String,
        required: true
    },
    staff_code:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    expriences:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    phone_no:{
        type: String,
        required: true,
        unique: true
    }
})

const Staffdb =mongoose.model('staffdbs',schema)

module.exports = Staffdb;


