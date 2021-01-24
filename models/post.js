const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Postschema = new Schema({
    //Attributes of Post structure
    text:{
        type: String,
        required: true
    },
    postedBy:{
        type: String,
        required: true
    },
    postedAt:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
},{collection:'Posts'});

module.exports = mongoose.model('Post',Postschema); //export to public