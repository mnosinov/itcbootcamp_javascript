function f1() {
	console.log(2);
}
addEventListener("DOMContentLoaded", f1);

console.log(1);
const bodyElement = document.querySelector("body");

const containerElement = document.createElement("div");
containerElement.className = "container";
containerElement.textContent = "Hello Div";

const spanElement = document.createElement("span");
spanElement.textContent = "Hello Spannn";
containerElement.appendChild(spanElement);

bodyElement.appendChild(containerElement);

//containerElement.setAttribute("style", "width:100px; height:100px; background-color: red");
containerElement.id = "someId";

//containerElement.style.backgroundColor = "green";
containerElement.classList.add("container");
console.log(3)

const image = document.createElement("img");
image.src = "https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_01_l.jpg";
image.style.width = "300px";
image.style.border = "5px solid red";
image.style.transform = "rotate(90deg)";

bodyElement.appendChild(image);
