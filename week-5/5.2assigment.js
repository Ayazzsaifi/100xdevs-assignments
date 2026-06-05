const express= require('express');
const app= express();

function logger (req,res,next){
    console.log(req.url);
    console.log(new Date());
    console.log(req.method);
    next();
}

app.use(logger);

app.get('/hi',function(req,res){
    res.status(200).json({
        msg:"working"
    })
})

app.listen(3000);