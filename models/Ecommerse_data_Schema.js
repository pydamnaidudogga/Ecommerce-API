const mongoose = require('mongoose');
// this is the schema of products
const ProductSchema = new mongoose.Schema({

    

    name: {
        type: String,
        require: true

    },
    quantity: {
        type: Number,
        require: true
    }



});

const ProductData = mongoose.model('ProductData',ProductSchema);

module.exports = ProductData;