const mongoose = require("mongoose")

const ProductSchema  = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: [true, "title is required!"],
            minlength: [2, "title must be greater than 2 characters"]
        },

        price: {
            type: Number, 
            required: [true, "price is required!"]
        },

        description: {
            type: String, 
            required: [true, "description is required!"],
            minlength: [10, "description has a min of 10 characters"],
            maxlength: [100, "description has a max of 100 characters"]
        }
    }, 
    {timestamps : true}
)

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product