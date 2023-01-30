let pieceOfFood = prompt("Enter a food");

if (pieceOfFood === "apple" || pieceOfFood === "orange" || pieceOfFood === "banana") {
	console.log("This piece of food is fruit");
} else if (pieceOfFood === "potato" || pieceOfFood === "tomato" || pieceOfFood === "pepper") {
	console.log("This piece of food is vegetable");
} else {
	console.log("This piece of food is neither a fruit nor a vegetable");
}
