const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    
        title:{
            type: String,
            required: true
        },
        desc:{
            type: String,
            required:true
        },
        image:{
            type: String,
            required:true
        },
        category:{
            type: String,
            required:false
        },
        date:{
            type: String,
            required:true
        },
        state:{
            type: String,
            required:true
        }
    
        
    },
    {
        timestamps:true
    });

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
