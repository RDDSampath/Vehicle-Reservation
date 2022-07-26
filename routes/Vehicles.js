const express = require('express');
const router = express.Router();
const vehicles = require('../models/Vehicles');

 //save packages

router.post('/vehicle/add',(req,res)=>{

    let newVehicle= new vehicles(req.body);

    newVehicle.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"vehicle save Successfully"
        });
    });
});

router.get('/vehicle',(req,res)=>{
    vehicles.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    })
})
//delete
router.delete('/vehicle/delete/:id',(req,res) =>{
    vehicles.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
            if(err)
                return res.status(400).json({
                    massage:"delete unsuccesful",err
                });
            return res.json({
                message:"Delete Succesfull",deletedPost
            });
        });
    });
    //get specific 
 router.get("/vehicle:id",(req,res) =>{
    let userId = req.params.id;
    vehicles.findById(userId,(err,posts) =>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            posts
        });
    });
});


module.exports=router;