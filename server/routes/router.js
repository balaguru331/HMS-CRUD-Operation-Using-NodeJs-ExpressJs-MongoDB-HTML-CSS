const express = require('express');
const route = express.Router()

const controller = require('../controller/controller');
const login_controller =require('../controller/login_controller')
const staff_controller =  require('../controller/staff_controller')
const booking_controller =require('../controller/booking_controller')

const axios = require('axios');
const { response } = require('express');

route.get('/index',(req,res) => {
    //Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index',{users:response.data});
    })
    .catch(err => {
        res.send(err);
    })

    
})

//Home Page Route
route.get('/',(req,res) => {
    res.render('home'); 
})


//Gallery Page Route
route.get('/gallery',(req,res) => {
    res.render('gallery'); 
})


//Login Page Route
route.get('/login',(req,res) => {
    res.render('login'); 
})


//New User Register Page Route
route.get('/newuser',(req,res) => {
    res.render('newuser'); 
})


//Patient Register Page Route
route.get('/add_user',(req,res) => {
    res.render('add_user'); 
})


//Staff Register Page Route
route.get('/staff_entry',(req,res) => {
    res.render('staff_entry'); 
})


//Staff Information Page Route
route.get('/staff_view',(req,res) => {
    //Make a get request to /api/users
    axios.get('http://localhost:3000/api/staff')
    .then(function(response){
        res.render('staff_view',{staff:response.data});
    })
    .catch(err => {
        res.send(err);
    })

    
})


//Patient Update Page Route
route.get('/update_user',(req,res) => {
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata) {
        res.render("update_user",{user:userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
     
})

//Staff Update Page Route
route.get('/staff_update',(req,res) => {
    axios.get('http://localhost:3000/api/staff',{params:{id:req.query.id}})
    .then(function(staffdata) {
        res.render("staff_update",{staff:staffdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
     
})


//API //////////CURD Operation
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)
route.post('/api/loginuser',login_controller.create)
route.post('/api/login',login_controller.check)
route.post('/api/staff',staff_controller.staffcreate)
route.get('/api/staff',staff_controller.stafffind)
route.put('/api/staff/:id',staff_controller.staffupdate)
route.delete('/api/staff/:id',staff_controller.staffdelete)


route.post('/api/booking',booking_controller.store)

module.exports = route



//Information Page ///Patient entry--Staff entry--Booking appointment

route.get('/info',(req,res) => {
    res.render('information');
})

route.get('/patient_info',(req,res) =>{
    res.render('patient_information')
})

route.get('/staff_info', (req,res) => {
    res.render('staff_information')
})

route.get('/book_info',(req,res) => [
    res.render('booking')
])

route.get('/about',(req,res) => {
    res.render('about')
})
