const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
     
    
    description:{
        type:String,
        required:true
    },

    photo:{
        type:String,
        
    }

});

module.exports = mongoose.model('post',postSchema);