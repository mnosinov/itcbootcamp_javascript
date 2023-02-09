const concatenate = listOfStrings => {
		return listOfStrings.reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue, "");
};

const concatenate1 = function(listOfStrings) {
		return listOfStrings.reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue, "");
};

const concatenate2 = function(listOfStrings) {
		return listOfStrings.reduce( (accumulator, currentValue, currentIndex, array) => {
			return accumulator + currentValue;
		}, "");
};

console.log(concatenate(["Hello", " ", "world", "!"]));	// Output: "Hello world!"
console.log(concatenate1(["Hello", " ", "world", "!"]));	// Output: "Hello world!"
console.log(concatenate2(["Hello", " ", "world", "!"]));	// Output: "Hello world!"

/*
 * Write a function that takes an array of numbers and returns the product of all the numbers using the reduce() method.
*/

function product(numbers) {
	return numbers.reduce( (accumulator, curValue, curIndex, array) => accumulator * curValue, 1);
}

console.log(product([1, 2, 3, 4, 5]));	// Output: 120

/*
 * Write a function that takes an array of numbers and returns the average of all the numbers using the reduce() method.
*/

function average(numbers) {
	return numbers.reduce( (accumulator, curValue, curIndex, array) => accumulator + curValue, 0) / numbers.length;
}

function average1(numbers) {
	return numbers.reduce( (accumulator, curValue, curIndex, array) => accumulator + curValue / numbers.length, 0);
}

console.log(average([1, 2, 3, 4, 5]));
console.log(average1([1, 2, 3, 4, 5]));

// Write a function that takes an array of strings and returns the string with the longest length using the reduce() method.
function findLongestString(strList) {
	return strList.reduce( (accumulator, str) => str.length > accumulator.length ? str : accumulator, "");
}

function findLongestString1(strList) {
	return strList.reduce( (accumulator, str, index, array) => {
		if (str.length > accumulator.length) {
			return str;
		} else {
			return accumulator;
		}
	}, "");
}

const findLongestString2 = strList => {
	return strList.reduce( (accumulator, str) => {
		if (accumulator.length < str.length) return str; else return accumulator;
	}, "");
};

const findLongestString3 = function(strList) {
	let result = strList.reduce( (accumulator, str) => {
		if (accumulator.length < str.length) return str; else return accumulator;
	}, "");
	return result;
};

console.log(findLongestString(["Hello", "world", "this", "is", "a", "long", "sentence"]));
console.log(findLongestString1(["Hello", "world", "this", "is", "a", "long", "sentence"]));
console.log(findLongestString2(["Hello", "world", "this", "is", "a", "long", "sentence"]));
console.log(findLongestString3(["Hello", "world", "this", "is", "a", "long", "sentence"]));


function summ(numbers) {
	return numbers.reduce( (accumulator, curValue, curIndex, array) => {
		console.log(curIndex, curValue);
		return accumulator + curValue;
	}/*, 0*/);
}
console.log(summ([10, 2, 3, 4, 5]));

/* array some ------------------------------------- BEGIN */
const numbers = [1, 4, 6, 8, 4, 9, 5, 3];
const isTrue = numbers.some( item => item === 14 );
console.log(isTrue);


const data = {
  employees: [
    { name: "John", age: 32, position: "Manager" },
    { name: "Jane", age: 28, position: "Developer" },
    { name: "Bob", age: 35, position: "Designer" },
    { name: "Steve", age: 40, position: "Developer" },
  ],
  projects: [
    { name: "Project A", deadline: "01/01/2022", manager: "John" },
    { name: "Project B", deadline: "01/02/2022", manager: "Jane" },
    { name: "Project C", deadline: "01/03/2022", manager: "Bob" },
  ],
};

function isAge35Exists(data) {
	return data.employees.some( function(emp) {
		return emp.age === 35;
	});
}

function isAge35Exists(data) {
	return data.employees.some( emp => emp.age === 35 );
}
console.log(isAge35Exists(data));

/* array every ------------------------------------- BEGIN */
const words = ['hi', 'my', 'fi'];
let bool = words.every( word => word.length === 2 );
console.log(bool);
words.push('good');
bool = words.every( word => word.length === 2 );
console.log(bool);

const numbersArr = [2, 4, 6, 8, 10];
bool = numbersArr.every( (element, index, array) => element % 2 === 0 );
console.log(bool);

const sports = ['football', 'basketball', 'paintball'];
bool = sports.every( (element, index, array) => element.includes('ball'));
console.log(bool);
