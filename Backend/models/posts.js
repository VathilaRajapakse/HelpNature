const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post_name:{
        type:String,
        required:true
    },

    // image:{
    //     type:String,
    //     required:true
    // },
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