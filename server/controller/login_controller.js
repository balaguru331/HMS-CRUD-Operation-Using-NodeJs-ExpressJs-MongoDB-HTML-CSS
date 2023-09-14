var Newuserdb = require('../model/login_model')
const bcrypt = require('bcrypt')


//create and save new patient details
exports.create = (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message:"Content con not be emtpy!"});
        return;
    }
    
    //new user
    const newuser = new Newuserdb({
        emailid:req.body.emailid,
        newpwd:req.body.newpwd,
        confirmpwd:req.body.confirmpwd
        
    })

    //save details in the database
    newuser
    .save(newuser)
    .then(data =>{
       ///res.send(data)
       res.redirect('/login')
    })
    .catch(err => {
        res.status(500).send({
            message: err.message ||"Some error accurred while creatind a create operation"
        });
    });
}

exports.check = async(req,res) =>{
    try {
        const email = req.body.email
        const password = req.body.password

       const useremail = await Newuserdb.findOne({emailid:email})
       
    if(useremail.newpwd === password){
        res.redirect('/info')
    }else{
        res.send("Password are not matching");
    }
        
    } catch (error) {
        res.status(500).send("invalid Email")
    }
   
    
}





