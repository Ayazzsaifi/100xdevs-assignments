const fs =require ('fs');

function promisifiedReadfile (filepath){
    return new Promise(function(resolve,reject){
        fs.readFile(filepath,'utf-8',function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })

    });
}

promisifiedReadfile('./test.txt').then(function(data){
    console.log(data);
});