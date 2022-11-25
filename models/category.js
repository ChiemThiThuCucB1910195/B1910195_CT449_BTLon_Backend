const { model, Schema, Schema: { Types: {ObjectId }} } = require("mongoose");

const categoryschema = new Schema({
    name: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    products: [
        {
            type: ObjectId,
            ref: "Product"
        },
    ],
    created: {
        type: Date,
        default: Date.now(),
    },
})
module.exports = model("Category", categoryschema);