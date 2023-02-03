function absoluteValues(listOfNumbers) {
	return listOfNumbers.map( (element, index, array) => { return Math.abs(element) }).reverse();
}

const numbers = [-1, 2, 0, -4, -20, 80];

console.log(absoluteValues(numbers));
