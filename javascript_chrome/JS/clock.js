const clock = document.querySelector("h2#clock");

//interval '매번' 일어나야하는 무언가
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${second}`;
}

//두 개의 매개변수 필요 1. 호출하는 함수 2. 호출 간격(ms)
//setInterval(sayHello, 5000);
getClock()
setInterval(getClock, 1000);

//padStart() str에 사용하며 원하는 길이의 문자로 만들어줌. (반대 padEnd())