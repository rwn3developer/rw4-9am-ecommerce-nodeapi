const express = require('express');

const routes = express.Router();

const passport = require('passport');

const multer = require('multer');

const {verifyToken} = require('../config/passport-jwt-stetergy');
const {checkRole} = require('../config/passport-jwt-stetergy');

const admincontroller = require('../controllers/AdminController');
const categorycontroller = require('../controllers/CategoryController');
const subcategorycontroller = require('../controllers/SubcategoryController');
const productcontroller = require('../controllers/ProductController');


//file upload
const fileUpload = multer.diskStorage({
    destination : (req,res,cb) => {
           cb(null,'./uploads');
    },
    filename : (req,file,cb) => {
        cb(null,Date.now()+file.originalname);
    }
})

const imageUpload = multer({storage : fileUpload}).single('product_image');


routes.post('/adminInsert',admincontroller.index);
routes.get('/adminview',verifyToken,checkRole('admin'),admincontroller.adminview);
routes.delete('/admindelete',admincontroller.admindelete)
routes.put('/adminupdate',admincontroller.adminupdate);
routes.post('/login',admincontroller.login);
routes.post('/categoryPost',categorycontroller.categoryPost);
routes.get('/viewcategory',verifyToken,categorycontroller.viewcategory);
routes.post('/subcategoryinsert',subcategorycontroller.subcategoryinsert); 
routes.get('/viewsubcategory',subcategorycontroller.viewsubcategory);
routes.post('/productinsert',imageUpload,productcontroller.productinsert);
routes.get('/productviewapi',productcontroller.productviewapi);

module.exports = routes;