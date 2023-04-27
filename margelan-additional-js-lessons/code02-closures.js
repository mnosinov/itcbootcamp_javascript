// Closure
// Замыкание

function power(number) {
	let count = number;
	return function(power) {
		return count-- ** power;
	}
}


const math = power(5);

console.log(math(3));
console.log(math(3));
console.log(math(3));

