const express = require('express');
const router = express.Router();
const drivers = require('../models/Drivers');


//save packages

router.post('/driver/add',(req,res)=>{

    let newDriver = new drivers(req.body);

    newDriver.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Driver save Successfully"
        });
    });
});

//get data
router.get('/driver',(req,res)=>{
    drivers.find().exec((err,posts)=>{
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
router.delete('/driver/delete/:id',(req,res) =>{
    drivers.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
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
 router.get("/driver:id",(req,res) =>{
    let userId = req.params.id;
    drivers.findById(userId,(err,posts) =>{
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