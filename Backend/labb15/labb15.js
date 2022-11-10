const express = require('express');
const path = require('path');
var fs = require('fs');

const app = express();
const PORT = process.env.PORT || 7373;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));


app.post('/fData', (req, res) => {
    dataToAdd = JSON.parse(JSON.stringify(req.body));
    const todoId = Date.now();
    dataToAdd.completed = false;
    dataToAdd.id = todoId;
          
    let todosToWrite =readAllTodos();
 
    todosToWrite.push(dataToAdd);
    todosToWrite = JSON.stringify(todosToWrite);
    writeToFile(todosToWrite);
   

    res.end();
});

function writeToFile(todosToWrite){
    fs.writeFileSync(path.join(__dirname,'data', 'todos.json'), todosToWrite, function(err) {
        if (err) throw err;
        });
    return;
}

app.get('/list', (req, res) => {
    const tempTodos = readAllTodos(); 
    const sendIt = JSON.stringify(tempTodos);
    res.end(`${sendIt}`);
});

app.delete('/rem', (req, res) => {
    dataToDelete = JSON.parse(JSON.stringify(req.body));
    console.log('delete todo' + dataToDelete);
    console.log(dataToDelete.id);
    let tempTodos = readAllTodos(); 
    tempTodos.splice(tempTodos.findIndex(todo => todo.id === dataToDelete.id), 1);
    console.log(tempTodos);
    tempTodos = JSON.stringify(tempTodos);
    writeToFile(tempTodos);
    console.log('delete file written');
    res.end();
});



function readAllTodos(){
    const todosInFile = fs.readFileSync(path.join(__dirname,'data', 'todos.json'), function(err) {
        if (err) throw err;
    });
    
    const todos = JSON.parse(todosInFile);
    // console.log(todos);
    return todos;
}


app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}!`))

