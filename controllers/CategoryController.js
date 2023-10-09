const categoryTbl = require('../models/CategoryModel');

const categoryPost = async(req,res) => {
   try{
        if(req.body.category != ""){
            let categorydata = await categoryTbl.create({
                category : req.body.category
            })
            if(categorydata){
                return res.json({"messege" : "Category Successfully Add",status : 1});
            }else{
                return res.json({"messege" : "Category Not  Add",status : 0});
            }
        }else{
            return res.json({"messege" : "Category Must be required",status : 0});
        }
   }catch(err){
        console.log(err);
        return false;
   }
}

const viewcategory = async(req,res) => {
    try{
        let viewcategory = await categoryTbl.find({});
        if(viewcategory){
            return res.json({"viewcategory" : viewcategory,status : 1});
        }else{
            return res.json({"messege" : "Category not fetch",status : 0});
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    categoryPost,viewcategory
}