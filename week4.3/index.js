const express = require('express');
const app = express();
const users=[{
    name:"kirat",
    kidneys:[{
        healthy:false
    }]
}]

app.use(express.json());

app.get('/',function(req,res){
    const kiratKidney=users[0].kidneys;
    const numOfKidneys=kiratKidney.length;
    const healthyKidneys=kiratKidney.filter(function(kidney){
        return kidney.healthy==true;
    });

    const numofHealthykidneys=healthyKidneys.length;
    const numOfUnhealthykidneys=numOfKidneys-numofHealthykidneys;

    res.json({
        "total Nunber of kidneys":numOfKidneys,
        "number of healthy Kidneys":numofHealthykidneys,
        "number of unhealthy kidneys":numOfUnhealthykidneys
    });

});

app.post('/',function(req,res){
    const ishealthy =req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })

    res.json({
        msg:"done"
    })
});


app.put('/',function(req,res){
    for(i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})

app.delete('/',function(req,res){
    const newkidney=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newkidney.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidney;
    res.json({
        msg:"done"
    })
})

app.listen(3000);