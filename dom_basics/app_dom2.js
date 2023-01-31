const body = document.querySelector("body");

const containerElement = document.createElement("div");
containerElement.className = "container";
containerElement.textContent = "I'm div";

const spanElement = document.createElement("span");
spanElement.textContent = "I'm span";
containerElement.appendChild(spanElement);

body.appendChild(containerElement);
