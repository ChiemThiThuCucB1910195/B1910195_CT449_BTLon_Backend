const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    fullname:{
        type: String,
    },
    email:{
        type: String,
    },
    password: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Account", accountSchema);