const express = require('express');
const Posts = require('../models/posts');
const cloudinary = require('../utils/cloudinary')
const router = express.Router();

//Save blogs
router.post('/post/save',(req,res) =>{

  
    let newPost = new Posts(req.body);
    
    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:"Blog saved successfully"
        });
    });
});

//get blogs
router.get('/posts',(req,res) =>{
   Posts. find().exec((err,posts) =>{
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

//get specific blogs
router.get("/post/:id",(req,res) =>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
    
});

//Update blogs
router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err,post)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"Updated Successfully"
        });
    }

    );
});

//delete blogs
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


// Update image
router.put('/image/update/:id', (req, res) => {
    let imageId = req.params.id;
  
    Images.findByIdAndUpdate(imageId, {
      $set: req.body
    }, (err, image) => {
      if (err) {
        return res.status(400).json({
          success: false,
          error: err
        });
      }
  
      return res.status(200).json({
        success: true,
        message: 'Image updated successfully'
      });
    });
  });
  
  // Delete image
  router.delete('/image/delete/:id', (req, res) => {
    let imageId = req.params.id;
  
    Images.findByIdAndRemove(imageId, (err, image) => {
      if (err) {
        return res.status(400).json({
          success: false,
          error: err
        });
      }
  
      return res.status(200).json({
        success: true,
        message: 'Image deleted successfully'
      });
    });
  });
  


module.exports = router;