const express = require('express');
const Posts = require('../models/Post');

const router = express.Router();

//Save post
router.post('/post/save',(req,res) =>{
    let newPost = new Posts(req.body);
    
    newPost.save((err) =>{
        if(err){cs
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:" successfully posted"
        });
    });
});

//get post
router.get('/post',(req,res) =>{
   Posts. find({}).exec((err,posts) =>{
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingPosts:posts
    });
   });
});

//get specific details

router.get("/post/:id",(req,res)=>{
    let PreId = req.params.id;

    Posts.findById(PreId,(err,posts)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            posts
        });
    });
 });

//Update post
router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err,Post)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"Post Updated Successfully"
        });
    }

    );
});

//delete post
router.delete('/post/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
        return res.json({
            message:"Delete Successful",deletedPost
        });
    });
})

module.exports = router;