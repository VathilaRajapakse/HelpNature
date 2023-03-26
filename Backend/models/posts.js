const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    blog_title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    

});



module.exports = mongoose.model('blogs',postSchema);