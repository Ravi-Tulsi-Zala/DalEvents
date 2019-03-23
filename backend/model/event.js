const mongoose = require('mongoose');

const event = mongoose.Schema({
   //_id: mongoose.Schema.Types.ObjectId,
    eventId:{
        type: Number,
        unique: true,
        trim: true
    },
    imageUrl:{
        type:String,
        trim: true
    },
    title:{
        type:String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    date:{
        type: Date,
        //required : true
    },
    host:{
        // specifying the type
        type: String,
       // required : true
    },
    price:{
        type: Number,
        //required : true,
    },
    category:{
        type: String
    },
    location:{
        type: String,
        //required : true
    },
    interested:{
        type: Number
    },
    disinterested:{
        type: Number
    },
});
module.exports = mongoose.model('event', event);