const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

//js object나 arry 등 어떤 것이든 string으로 바꿔주는 기능. JSON.stringify()
//string 을 js가 이해할 수 있는 arry로 바꾸는 기능. JSON.parse()
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


//삭제 버튼 이벤트
function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

//todo list js->html
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText= newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    //<li>
    //  <span>
    //</li>
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//todolist 글상자 이벤트
function handleToDoSubmit(event){
    event.preventDefault();
    //enter를 입력하면 글 상자를 비워줌.
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    //local storage에는 배열 저장 불가! 리스트만 가능
    const newToDoObj = {
        text: newTodo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    //localStorage에 저장된 string 형태의 배열을 parse 를 이용해 js가 이해할 수 있는 array로 변환.
    const parsedToDos = JSON.parse(savedToDos);
    //array 덮어쓰기 방지, 리스트에 요소를 추가하기 위함.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
