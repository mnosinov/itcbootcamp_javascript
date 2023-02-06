// Filter an array of numbers and return only even numbers.

const numbers = [2, 4, 1, 0, -5, 90];

function filterOnlyEven(list) {
	return list.filter( (item, index, array) => item % 2 === 0);
}

const filterOnlyEven1 = array => {
	return array.filter( num => num % 2 === 0 );
}

const filterOnlyEven2 = function(lst) {
	return lst.filter( n => n % 2 === 0);
}

console.log(filterOnlyEven(numbers));
console.log(filterOnlyEven1(numbers));
console.log(filterOnlyEven2(numbers));
