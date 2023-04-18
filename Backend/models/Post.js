const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
     
 
    description:{
        type: String,
        required: true
    },

    photo:{
        data: Buffer,
        contentType: String,
    }

});

module.exports = mongoose.model('post',postSchema);