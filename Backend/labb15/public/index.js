
const allTheTodos = document.querySelector('#gurka');
const form = document.querySelector('.form');
const inputText = document.querySelector('#inputText');


form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(inputText.value);
    if(inputText.value.trim() === '') {
      console.log('You need to enter something to do');
      inputText.value = '';
      return;
    }
    
    shipIt(inputText.value);
    inputText.value = ''
    
  });

showTodosList();

async function showTodosList(){
    const todos = [];
    
    allTheTodos.replaceChildren();
    
    const res = await fetch("/list");   
    const todosList = await res.json();

// Necessary??? Just copying to global var
    todosList.forEach(todo => todos.push(todo));
console.log(todos);

   
    todos.forEach(todo => {allTheTodos.appendChild(createTodoItem(todo))
    })
}

const createTodoItem = todo => {

  let todoDiv = document.createElement('div');
  todoDiv.classList.add('todoRow');
  
  let todoText = document.createElement('p');
  todoText.classList.add('todo_item');
  
  todoText.innerText = todo.iText;


  let delButt = document.createElement('button');
  delButt.classList.add('delButt');
  delButt.textContent='X';


  todoDiv.appendChild(todoText);
  
  todoDiv.appendChild(delButt);
  

  delButt.addEventListener('click', () => {deleteTodo(todo.id)});

  return todoDiv;
}

async function shipIt(todoValue){
    const res = await fetch('/fData', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      iText: todoValue})


    });   
console.log(res);
    
    if (res.status== 200){
    console.log('jaaaa!!!!');
    
        showTodosList();
    return;
    }
     
}

async function deleteTodo(todo){
console.log('gonna delete this ' + todo);
  const res = await fetch('/rem', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      id: todo})


    });   
console.log('Delete res:' + res);
    
    if (res.status== 200){
    console.log('reeeeeee!!!');
    
        showTodosList();
    return;
    }


}