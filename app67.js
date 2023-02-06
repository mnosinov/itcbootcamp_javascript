// Filter an array of numbers and return only even numbers.

const numbers = [2, 4, 1, 0, -5, 90];

function lessThan3(number) {
	return number < 3;
}

const lessThan5 = function(num) {
	return num < 5;
}

const moreThan50 = num => {
	return num > 50;
}

console.log(numbers.filter( (item, index, array) => item > 3));
console.log(numbers.filter( (item, index, array) => item % 2 === 0));
console.log(numbers.filter( (item, index, array) => index % 2 !== 0));
console.log(numbers.filter( (item, index, array) => lessThan3(item)));
console.log(numbers.filter( (item, index, array) => lessThan5(item)));
console.log(numbers.filter( (item, index, array) => moreThan50(item)));
