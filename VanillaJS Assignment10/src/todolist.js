const List = document.getElementById("todolist");
const inputNewTodo = document.getElementById("input_new_todo");
const formNewTodo = document.getElementById("form_new_todo");
let toDoLists = [];
const savedToDos = localStorage.getItem("toDos");

function saveToDoList(){
    localStorage.setItem("toDos", JSON.stringify(toDoLists));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDoLists = toDoLists.filter((item) => item.id !== parseInt(li.id));
    saveToDoList();
}

function showToDoList(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");

    btn.innerText = "delete";
    btn.addEventListener("click", deleteToDo)

    li.appendChild(span);
    span.innerText = newTodo.text;
    List.appendChild(li);
    li.appendChild(btn);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = inputNewTodo.value; 
    inputNewTodo.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDoLists.push(newTodoObj);
    showToDoList(newTodoObj);
    saveToDoList();
}


formNewTodo.addEventListener("submit", handleTodoSubmit);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDoLists = parsedToDos;
    parsedToDos.forEach(showToDoList);
}