const images =["0.jpg", "1.jpg", "2.jpg", "3.jpg"];


const chosenImage = images[Math.floor(Math.random() * images.length)];

//JS->HTML 로 요소 추가 
const bgImage = document.createElement("img");
bgImage.setAttribute("id", "bg");

bgImage.src = `IMG/${chosenImage}`;

document.body.appendChild(bgImage);
