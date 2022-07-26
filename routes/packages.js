const express = require('express');
const router = express.Router();
const packages = require('../models/packages');

//save packages

router.post('/package/add',(req,res)=>{

    let newPackage = new packages(req.body);

    newPackage.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"packages save Successfully"
        });
    });
});

//get package

router.get('/package',(req,res)=>{
    packages.find().exec((err,posts)=>{
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

//update package
router.put(`/package/update/:id`,(req,res) =>{
    packages.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,posts)=>{
            if(err){
                return res.status(400).json({
                    error:err});
            }
            return res.status(200).json({
                success:"Updated packages"
                
            });
        }
    );
});

//delete
router.delete('/package/delete/:id',(req,res) =>{
    packages.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
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
    router.get("/package/get/:id",(req,res) =>{
        let PackageId = req.params.id;
        packages.findById(PackageId,(err,posts) =>{
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