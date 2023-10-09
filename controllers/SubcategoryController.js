const subcategoryModel = require("../models/SubcategoryModel");
const categoryModel = require('../models/CategoryModel');
const subcategoryinsert = async(req,res) => {
    try{
        let subcategoryinsert = await subcategoryModel.create({
            categoryId : req.body.categoryId,
            subcategory : req.body.subcategory
        });
        if(subcategoryinsert){
            return res.json({"messege" : "Subcategory record insert",status : 1});
        }else{
            return res.json({"messege" : "Subcategory not insert",status : 0});
        }
    }catch(err){
        console.log(err);
        return false
    }
}

const viewsubcategory = async(req,res) => {
    try{
        //using populate query join two table
        // let viewsubcategoryapi = await subcategoryModel.find({}).populate('categoryId');
        // if(viewsubcategory){
        //     return res.json({"viewsubcategory" : viewsubcategoryapi,status : 1});
        // }else{
        //     return res.json({"messege" : "Subcategory not fetch",status : 0});
        // }
        const results = await categoryModel.aggregate([
            {
              $lookup: {
                from: 'subcategories',
                localField: '_id',
                foreignField: 'categoryId',
                as: 'viewsubcategory',
              },
            },
          ]);
          res.json(results);
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    subcategoryinsert,viewsubcategory
}