const bodyElement = document.querySelector("body");

const containerElement = document.createElement("div");
containerElement.className = "container";
containerElement.textContent = "I'm div";

const spanElement = document.createElement("span");
spanElement.textContent = "I'm span";
containerElement.appendChild(spanElement);

bodyElement.appendChild(containerElement);

containerElement.style.color = "navy";
containerElement.style.fontSize = "26px";
containerElement.style.width = "100px";
containerElement.style.height = "100px";
containerElement.style.backgroundColor = "red";
spanElement.style.color = "green";
spanElement.style.fontSize = "0.7em";

containerElement.setAttribute("style", "background-color: blue");
containerElement.setAttribute("id", "containerId");
