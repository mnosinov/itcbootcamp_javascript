function determineShape(numOfAngles) {
	if (numOfAngles === 3) {
		return "The shape is a triangle";
	} else if (numOfAngles === 4) {
		return "The shape is a rectangle";
	} else if (numOfAngles === 5) {
		return "The shape is a pentagon";
	} else if (numOfAngles === 6) {
		return "The shape is a hexagon";
	} else if (numOfAngles === 7) {
		return "The shape is a heptagon";
	} else {
		return "No such shape exists";
	}
}

console.log(determineShape(3));
console.log(determineShape(4));
console.log(determineShape(5));
console.log(determineShape(6));
console.log(determineShape(7));
console.log(determineShape(8));
console.log(determineShape(2));
