const numbers = [1,2,3,4,5,6,7,8,9,10];

let result = numbers.map( (element, index, array) => {
	return [element, index, array];
});

console.log(result);
