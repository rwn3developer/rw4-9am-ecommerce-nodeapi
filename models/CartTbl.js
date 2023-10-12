const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    productId : {
        type : String,
        required : true
    },
    product_name : {
        type : String,
        required : true
    },
    product_price : {
        type : String,
        required : true
    },
    product_qty : {
        type : Number,
        required : true
    },
    product_description : {
        type : String,
        required : true
    },
    product_image : {
        type : String,
        required : true
    }
})

const cart = mongoose.model('cart',cartSchema);
module.exports = cart;