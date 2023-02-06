// Filter an array of numbers and return the sum of all numbers that are divisible by a specific number.

const numbers = [1, 5, 13, 20, 35, 77, 100, 222, 500, 41];

const divisor = 5;

// version 1
let selectedNumbers = numbers.filter( number => number  % divisor === 0 );

let sum = 0;
selectedNumbers.forEach( item => sum += item );
console.log(sum);

// version 2
console.log(numbers.filter( number => number % divisor === 0).reduce( (accumulator, curValue) => accumulator += curValue ));

// version 3.1
console.log(numbers.reduce( (accumulator, number) => accumulator += number % divisor === 0 ? number : 0, 0 ));

// version 3.2 !--- fix it to be working
console.log(numbers.reduce( (accumulator, number) => {
	if (number % divisor === 0) {
		accumulator +=  number;
	}
}, 0
));

// version 4
sum = 0;
numbers.forEach( item => {
	sum += item % divisor === 0 ? item : 0;
});
console.log(sum);
