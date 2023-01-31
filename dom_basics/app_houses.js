const bodyElement = document.querySelector("body");

const containerElement = document.createElement("div");
containerElement.className = "container";

// house 1
let blockElement = document.createElement("div");
blockElement.classList.add("block");
let image = document.createElement("img");
image.src = "http://cdn.home-designing.com/wp-content/themes/homedesigning-theme-last-12/images/landing/modern-house-exterior.jpg";
blockElement.appendChild(image);
let h1Element = document.createElement("h1");
h1Element.textContent = "Cozy Cottage";
let addressElement = document.createElement("p");
addressElement.textContent = "123 Main st";
let priceElement = document.createElement("p");
priceElement.textContent = "$100,000";
let typeElement = document.createElement("p");
typeElement.textContent = "Cottage";

blockElement.appendChild(h1Element);
blockElement.appendChild(addressElement);
blockElement.appendChild(priceElement);
blockElement.appendChild(typeElement);

containerElement.appendChild(blockElement);

// house 2
blockElement = document.createElement("div");
blockElement.classList.add("block");
image = document.createElement("img");
image.src = "http://cdn.home-designing.com/wp-content/uploads/2015/03/two-story-box-home.jpg";
blockElement.appendChild(image);
h1Element = document.createElement("h1");
h1Element.textContent = "Luxary Mansion";
addressElement = document.createElement("p");
addressElement.textContent = "456 Park Ave";
priceElement = document.createElement("p");
priceElement.textContent = "$1,000,000";
typeElement = document.createElement("p");
typeElement.textContent = "Mansion";
blockElement.appendChild(h1Element);
blockElement.appendChild(addressElement);
blockElement.appendChild(priceElement);
blockElement.appendChild(typeElement);
containerElement.appendChild(blockElement);

// house 3
blockElement = document.createElement("div");
blockElement.classList.add("block");
image = document.createElement("img");
image.src = "http://cdn.home-designing.com/wp-content/uploads/2015/03/brick-home-design-ideas.jpg";
blockElement.appendChild(image);
h1Element = document.createElement("h1");
h1Element.textContent = "Apartment";
addressElement = document.createElement("p");
addressElement.textContent = "789 Mapple St";
priceElement = document.createElement("p");
priceElement.textContent = "$500/month";
typeElement = document.createElement("p");
typeElement.textContent = "Appartment";
blockElement.appendChild(h1Element);
blockElement.appendChild(addressElement);
blockElement.appendChild(priceElement);
blockElement.appendChild(typeElement);
containerElement.appendChild(blockElement);

bodyElement.appendChild(containerElement);
