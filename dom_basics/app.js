const	paragraphElement = document.createElement("p");
const	divElement = document.createElement("div");
const	spanElement = document.createElement("span");
const	imgElement = document.createElement("img");

paragraphElement.textContent = "Hello world!";
spanElement.textContent = "Hello World";

console.log(paragraphElement);
console.log(divElement);
console.log(spanElement);
console.log(imgElement);

const body = document.querySelector("body");

body.appendChild(paragraphElement);
body.appendChild(spanElement);
