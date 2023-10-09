const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/rw4-node-9am-api');


const db = mongoose.connection;

db.on('connected',(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("DB is Connected");
})