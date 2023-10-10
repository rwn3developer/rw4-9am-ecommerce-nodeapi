const productTbl = require('../models/ProductModel');

const productinsert = async(req,res) => {
   try{
    if(req.file){
        let productinsert = await productTbl.create({
            categoryId : req.body.category,
            subcategoryId : req.body.subcategory,
            product_name : req.body.product_name,
            product_price : req.body.product_price,
            product_qty : req.body.product_qty,
            product_description : req.body.product_description,
            product_image : req.file.path
          });
          if(productinsert){
             return res.json({"messege" : "Product successfully insert"});
          }else{
            return res.json({"messege" : "Product not insert"});
          }
    }else{
         return res.json({"messege" : "File notupload",status : 1});
    }
   }catch(err){
       console.log(err);
       return false;
   }
}
module.exports = {
    productinsert
}