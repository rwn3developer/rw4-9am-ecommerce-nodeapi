const express = require('express');

const routes = express.Router();

const passport = require('passport');

const {verifyToken} = require('../config/passport-jwt-stetergy');
const {checkRole} = require('../config/passport-jwt-stetergy');

const admincontroller = require('../controllers/AdminController');
const categorycontroller = require('../controllers/CategoryController');
const subcategorycontroller = require('../controllers/SubcategoryController');


routes.post('/adminInsert',admincontroller.index);
routes.get('/adminview',verifyToken,checkRole('admin'),admincontroller.adminview);
routes.delete('/admindelete',admincontroller.admindelete)
routes.put('/adminupdate',admincontroller.adminupdate);
routes.post('/login',admincontroller.login);
routes.post('/categoryPost',categorycontroller.categoryPost);
routes.get('/viewcategory',verifyToken,categorycontroller.viewcategory);
routes.post('/subcategoryinsert',subcategorycontroller.subcategoryinsert); 
routes.get('/viewsubcategory',subcategorycontroller.viewsubcategory);


module.exports = routes;