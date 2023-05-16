const mongoose = require('mongoose');

const postProject = new mongoose.Schema({

    projectName:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
  
    time:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('project',postProject);