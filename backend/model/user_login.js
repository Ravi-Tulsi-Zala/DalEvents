const mongoose = require('mongoose');

var users = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:{
        type:String,
        unique: true,
        minlength : 3,
        trim: true
    },
    password:{
        type: String,
        minlength: 8,
        maxlength: 128, 
        trim: true
    },
    firstname:{
        // specifying the type
        type: String,
        required : true,
        minlength: 1,
        trim:true // trims all the empty spaces
    },
    lastname:{
        type: String,
        required : true,
        minlength: 1,
        trim:true // trims all the empty spaces
    },
    email:{
        type: String,
        unique: true,
        required:true,
        trim:true
    },
    category:{
        type: String,
        trim:true
    },
    banner_id:{
        type: String,
        unique: true,
        required: true,
        trim:true
    }
});

module.exports = mongoose.model('user_login', users);