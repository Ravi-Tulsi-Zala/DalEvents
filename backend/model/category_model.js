const mongoose = require('mongoose');

const category = mongoose.Schema({
   //_id: mongoose.Schema.Types.ObjectId,
    category:{
        type: String,
        unique: true,
        trim: true
    }
});
module.exports = mongoose.model('category', category);