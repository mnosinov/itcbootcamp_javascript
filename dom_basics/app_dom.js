const bodyElement = document.querySelector("body");

const containerElement = document.createElement("div");
containerElement.className = "container";
containerElement.textContent = "Hello Div";

const spanElement = document.createElement("span");
spanElement.textContent = "Hello Span";
containerElement.appendChild(spanElement);

bodyElement.appendChild(containerElement);

containerElement.setAttribute("style", "width:100px; height:100px; background-color: red");
containerElement.id = "someId";

const box = document.createElement("div");
box.textContent = "Hello box!";
// box.className = "box";
box.style.backgroundColor = "green";
box.classList.add("box");

containerElement.appendChild(box);
