var Staffdb = require('../model/staff_model')


//create and save new patient details
exports.staffcreate = (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message:"Content con not be emtpy!"});
        return;
    }
    
    //newstaff
    const newstaff = new Staffdb({

        staff_name:req.body.staff_name,
        staff_code:req.body.staff_code,
        department:req.body.department,
        expriences:req.body.expriences,
        qualification:req.body.qualification,
        phone_no:req.body.phone_no
        
    })

    //save details in the database
    newstaff
    .save(newstaff)
    .then(data =>{
       ///res.send(data)
        res.redirect('/staff_entry')
    })
    .catch(err => {
        res.status(500).send({
            message: err.message ||"Some error accurred while creatind a create operation"
        });
    });
}


//Staff details find
exports.stafffind = (req,res) => {

    if(req.query.id){
        const id = req.query.id;

        Staffdb.findById(id)
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
    Staffdb.find()
    .then(newstaff =>{
        res.send(newstaff)
    })
    .catch(err => {
        res.status(500).send({message:err.message || "Error Occerred while retriving user information"})
    })
}
}


//Staff Update 

exports.staffupdate = (req,res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }

    const id=req.params.id;
    Staffdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
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

//Staff delete
exports.staffdelete = (req,res) => {
    const id=req.params.id;

    Staffdb.findByIdAndDelete(id)
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