function promisifiedFetch(someUrl) {
    return new Promise(function (resolve, reject) {
        fetch(someUrl)
            .then(function (response) {
                return response.json();
            });
        promisifiedFetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(function (data) {
            console.log(data);
        })
    });
}

