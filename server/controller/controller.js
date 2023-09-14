var Userdb = require('../model/model')

//create and save new patient details
exports.create = (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message:"Content con not be emtpy!"});
        return;
    }

    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        gender:req.body.gender,
        cell:req.body.cell,
        dob:req.body.dob,
        marital:req.body.marital,
        address:req.body.address,
        status:req.body.status
    })

    //save details in the database
    user
    .save(user)
    .then(data =>{
       //res.send(data)
       res.redirect('/add_user')
    })
    .catch(err => {
        res.status(500).send({
            message: err.message ||"Some error accurred while creatind a create operation"
        });
    });
}

// retrieve and return all patient details / retrieve and return a single patient details
exports.find = (req,res) => {

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:"Not found user id"+id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error retrieving user with id"+id})
        })

    }
    else{

        Userdb.find()
        .then(user =>{
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message:err.message || "Error Occerred while retriving user information"})
        })
    
    }
}

// Update a new idetified patient details by patient id
exports.update = (req,res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }

    const id=req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data => {
        if(!data){
            res.status(404).send({message:"Cannot Update user with"+id+"Maybe user not found"})
        }else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message:"Error Update user Information"})
    })

}  

//Delete a patient details with specified user id in the request
exports.delete = (req,res) => {
    const id=req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data=> {
        if(!data){
            res.status(404).send({message:"Cannot Delete with"+id+"Maybe id is wrong"})
        }else{
            res.send({
                message:"User was deleted Successfully!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({message:"Could not Delete user Information of"+id});
    });

}