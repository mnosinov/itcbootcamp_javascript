// Arrow function
const calcWithWrrowFunc1 = (radius) => {
	return Math.PI * Math.pow(radius, 2);
}

console.log(calcWithWrrowFunc1(34));

const calcWithWrrowFunc2 = radius => Math.round(Math.PI * radius**2);

console.log(calcWithWrrowFunc2(34));
