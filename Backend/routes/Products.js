const express = require('express');
const Products = require('../models/Products');

const router = express.Router();

//Save blogs
router.post('/products/save',(req,res) =>{
    let newProducts = new Products(req.body);
    
    newProducts.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:"Product added successfully"
        });
    });
});

//get blogs
router.get('/products',(req,res) =>{
    Products. find().exec((err,Products) =>{
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        existingProducts:Products
    });
   });
});

//Update blogs
router.put('/products/update/:id',(req,res)=>{
    Products.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err,Products)=>{
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
router.delete('/products/delete/:id',(req,res) =>{
    Products.findByIdAndRemove(req.params.id).exec((err,deletedProduct) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
        return es.json({
            message:"Delete Successful",deletedProduct
        });
    });
})

module.exports = router;