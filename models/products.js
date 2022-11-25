const { model, Schema, Schema: { Types: {ObjectId }} } = require("mongoose");

const productSchema = new Schema({
    name:{
        type: String,
    },
    category: {
        type: ObjectId, 
        ref: "Category"
    },
    image:{
        type: Object,
    },
    description:{
        type: String,
    },
    price: {
        type: Number,
    },
    active:{
        type: Number,
    },
    created: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = model("Product", productSchema);
