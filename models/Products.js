const mongoose = require('mongoose')

const{Schema, model} = mongoose

const ProductSchema = new Schema({
    
        username: {
            type: String,
            required: true,
        },

        productName: [String],
        
        

        Price: {
            type: Number,
            required: true
        }
   
});

const Product = model("Product", ProductSchema);

module.exports = Product;
