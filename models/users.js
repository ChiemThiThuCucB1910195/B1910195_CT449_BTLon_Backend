const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname:{
        type: String,
    },
    email:{
        type: String,
    },
    image:{
        type: String,

    },
    position:{
        type: String,
    },
    gender:{
        type: String,
    },
    phone:{
        type: String,

    },
    address:{
        type: String,
    },
    created: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("User", userSchema);