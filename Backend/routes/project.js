const express = require('express');
const Project = require('../models/Project');
const router = express.Router();


router.post('/project/save',(req,res)=> {
    let Newpro = new Project(req.body);

    Newpro.save((err) => {
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:"Project successfully saved"
        });
    });

});

//read 
router.get('/project',(req,res) =>{
    Project.find().exec((err,Project) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProject:Project
        });
    });
});


//get specific details

router.get("/project/:id",(req,res)=>{
    let PreId = req.params.id;

    Project.findById(PreId,(err,project)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            project
        });
    });
 });


 
//update

router.put('/project/update/:id',(req,res) =>{
    Project.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,project) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Prescription Updated Successfully"
            });
        }
    );
});

//delete
router.delete('/project/delete/:id',(req,res) =>{
    Project.findByIdAndRemove(req.params.id).exec((err,deletedProject)=>{
        if(err) return res.status(400).listenerCount({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesfull",deletedProject
        });
    });
});

module.exports = router;