const express = require('express');
const app = express();


app.use(function(req,res,next){
    const url= req.url;
    const newdate= new Date();
    const urlMethod=req.method;
    console.log("URL access- "+ url + " On date- "+ newdate + "URL Method- "+ urlMethod);
    next();
})

app.get('/sum/:a/:b', function (req, res) {

    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({
        ans: a + b
    })
})

app.get('/subtract/:a/:b', function (req, res) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({
        ans: a - b
    })
})

app.get('/divide/:a/:b', function (req, res) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    if (b == 0) {
        res.json({err: "b cnt be 0 "})
    }
    else {
        res.json({
            ans: a / b
        })
    }
})


app.get('/multiply/:a/:b', function (req, res) {
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    res.json({
        ans: a * b
    })

})


app.listen(3000);
console.log("working");