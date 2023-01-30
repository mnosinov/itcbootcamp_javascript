const calculateAreaWithIf = function(radius) {
		if (radius < 1) {
			return "Radius must be a positive number";
	} else {
			return Math.PI * radius**2;
	}
}

///let radius = -30;
let radius = 60;
console.log(`${calculateAreaWithIf(radius)}`);
