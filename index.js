const express = require('express');

const port = 9000;

const app = express();

const db = require('./config/database');

// const passportJwt = require('./config/passport-jwt-stetergy');

app.use(express.urlencoded());

app.use(express.json());

app.use('/',require('./routes')); 

app.listen(port,(err)=>{
    if(err){
        console.log("Server is not start");
        return false;
    }
    console.log("Server is  start on port :- "+port);

})