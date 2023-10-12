const cartTbl = require('../models/CartTbl');
const productTbl = require('../models/ProductModel')
const addtocartinsert = async(req,res) => {
    try{
        let product = await productTbl.findById(req.body.id);
        if(product){ 
            let checkCart = await cartTbl.findOne({productId : req.body.id});
            if(checkCart){
                return res.json({messege : "product alredy exists",status : 1});
            }else{
                let addtocart = await cartTbl.create({
                    productId : product._id,
                    product_name : product.product_name,
                    product_price : product.product_price,
                    product_qty : product.product_qty,
                    product_description : product.product_description,
                    product_image : product.product_image
                });
                if(addtocart){

                    return res.json({messege : "Cart successfully add",status : 1});
                }else{
                    return res.json({messege : "Cart not add",status : 0});
                }
            }       
        }else{
            return res.json({messege : "Product not fetch",status : 0});
        }
    }catch(err){
        console.log(err);
        return false;
    }

}
module.exports = {
    addtocartinsert
}