function sum(numbers) {
	return numbers.reduce( (accumulator, currentValue, currentIndex, array) => {
		return accumulator + currentValue;
	}, 0);
}
console.log(sum([1, 2, 3, 4, 5]));	// Output: 15
