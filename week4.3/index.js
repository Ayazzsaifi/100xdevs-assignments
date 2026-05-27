const express=require('express')
const app = express();

const users =[{
    name:"harkirat",
    firstkidneys:[{
        healthy: false
    }]
}];

app.get('/',function(req,res){
    const harkiratkidneys=users[0].firstkidneys;
    const numberrOfKidneys=harkiratkidneys.length;
    const healthykidneys=harkiratkidneys.filter(function(kidney){
        return kidney.healthy === true;
    });
    const numberOfhealtykidneys=healthykidneys.length;
    const Unhealthykidneys=numberrOfKidneys-numberOfhealtykidneys;
    res.json({
        "total kidneys":numberrOfKidneys,
        "Unhealthy Kidneys":numberOfhealtykidneys,
        "healthy kidneys":healthykidneys
    });
});


app.post('/addkidney',function(req,res){
    const harkiratSecondKidneys=users[0].firstkidneys;
    harkiratSecondKidneys.push({secondKidney:[{healthy:true}]});
    res.json({message:"you kidney is transplanted ",
        kidneys:users[0].firstkidneys
    });

})

app.listen(3000);
console.log("running");