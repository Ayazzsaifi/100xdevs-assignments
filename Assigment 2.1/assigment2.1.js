

function promisifiedSetTimeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("1st question is completed");
        }, ms);
    });
}


promisifiedSetTimeout(2000).then(function(message){
    console.log(message);
});