const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //html에서 제공하는 input 유효성 검사 활용
    //유효성 검사를 위해 input 은 form 안에 위치해야한다.
    //새로 고침 없이 form 을 submit
    //enter 가능
    // const username = loginInput.value;
    // if( username == ""){
    //     alert("Please write your name.");
    // }
    // else if(username.length>15){
    //     alert("Your name is too long.");
    // }
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    printGreeting(username);

}

function printGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}
//addEventListener 안에 있는 함수는 직접 실행하지 않는다.
//JS에 함수의 이름만 넘기고 실행하는 것은 JS 몫이다.
//기본 동작을 막아야할 필요가 있다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    printGreeting(savedUsername);

}