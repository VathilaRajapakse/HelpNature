const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    username:{
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

   

});



module.exports = mongoose.model('post',postSchema);