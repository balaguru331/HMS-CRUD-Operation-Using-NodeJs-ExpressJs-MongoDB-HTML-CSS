var Bookingdb = require('../model/booking_model');
const fast2sms = require('fast-two-sms')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({path:'config.env'})

//Save Booking Details
exports.store = (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message:"Content con not be emtpy!"});
        return;
    }
    
    //new user
    const booking = new Bookingdb({
        name:req.body.name,
        cell:req.body.cell,
        dep:req.body.dep,
        date:req.body.date,
        time:req.body.time
        
    })
    
    //save details in the database
    booking
    .save(booking)
    .then(data =>{
       ///res.send(data)
       sendMessage(data.name,data.dep,data.date,data.time,data.cell)
       res.redirect('/book_info')
    })
    .catch(err => {
        res.status(500).send({
            message: err.message ||"Some error accurred while creatind a create operation"
        });
    });
}


function sendMessage(name,dep,date,time,cell) {
    var option ={
        authorization: process.env.API_KEY,
        message:'Hello '+name+' your are Fixed your appointment of '+dep+' on '+date+' at '+time,
        numbers:[cell],
    };
    
    fast2sms.sendMessage(option)
    .then((response) => {
        console.log("SMS sent Successfully")
    }).catch((error) => {
        console.log("Some error taken place")
    })
 }