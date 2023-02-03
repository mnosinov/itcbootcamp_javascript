const numbers = [1,2,3,4,5,6,7,8,9,10];

let result = numbers.map( (element, index, array) => {
	console.log(Mach.cbrt.element);
	console.log(Math.pow(element, 1 / 3));
	return Math.cbrt(element) === Math.pow(element, 1 / 3);
});

console.log(result);
