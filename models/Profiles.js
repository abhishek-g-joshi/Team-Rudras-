var mongoose = require("mongoose");

//Create Profile Schema
var ProfileSchema = new mongoose.Schema({
    special_id:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    College:{
        type: String,
        required: false
    },
    dob:{
        type: String,
        required: false
    },
    country:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false
    },
    noofsub:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Profile",ProfileSchema);