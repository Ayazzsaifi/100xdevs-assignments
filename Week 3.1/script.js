const input=document.getElementById('input');
const addBtn=document.getElementById('add-btn');
const todoList= document.getElementById('todo-list');
let count=0;

addBtn.addEventListener("click" , function(){
    let todoCount=todoList.children.length +1;
    let newTodo=document.createElement('div');
    let delBtn=document.createElement('button');
    delBtn.innerHTML="DELETE";
    newTodo.innerHTML=todoCount+"." +" "+input.value;
    todoList.appendChild(newTodo);
    newTodo.appendChild(delBtn);
    delBtn.addEventListener("click", function(){
        newTodo.remove();
    });
    
    input.value="";

});
