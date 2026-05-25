const express = require('express');
const app = express();
app.use(express.json())
let todos = [];

app.get('/todos', function (req, res) {
    res.json(todos);
});

app.post('/todos', function (req, res) {
    let id = Math.floor(Math.random() * 1000);
    let title = req.body.title;
    todos.push({ title, id });
    res.json({ message: "Todo Added!", todo: { title, id } })
});

app.delete('/delete/:id', function (req, res) {
    let id = Number(req.params.id);
    todos = todos.filter(function (todo) {
        return todo.id !== id;
    });
    res.json({ message: "Todo deleted!" });


});

app.listen(3000);
console.log("webpage is working on port 3000");