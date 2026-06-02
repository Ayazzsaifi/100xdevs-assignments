const express = require('express');
const app = express();

let requestCount=0;

app.use(function(req,res,next){
    requestCount=requestCount+1;
    next();
});

app.get('/user',function(req,res){
    res.json({
        msg:"hello cobra"
    });
    console.log('working');
});

app.get('/checkcount',function(req,res){
    res.json({
        requestCount
    });
});

app.listen(3000);

console.log("working");