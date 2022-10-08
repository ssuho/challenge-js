const toDoSection = document.querySelector("#todo-section");
const toDoForm = toDoSection.querySelector("form");
const toDoInput = toDoSection.querySelector("input");
const toDoList = toDoSection.querySelector("ul");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerHTML = newTodo.Text;
  const Btn = document.createElement("button");
  Btn.innerHTML = "x";
  Btn.style.color = "#FF0000";
  Btn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(Btn);
  toDoList.appendChild(li);
}

function addToDo(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObject = {
    Text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObject);
  paintToDo(newTodoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", addToDo);


const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}