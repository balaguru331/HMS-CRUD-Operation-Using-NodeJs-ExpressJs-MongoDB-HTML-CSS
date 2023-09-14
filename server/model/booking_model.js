const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    cell:{
        type:String,
        required:true,
    },
    dep:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

const Bookingdb =mongoose.model('bookdbs',schema)

module.exports = Bookingdb;