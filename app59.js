/* version 1 ----------------------------------------*/
function getMaxOfArray1(numbers) {
	let max = numbers[0];
	numbers.forEach( (item, index) => {
		if (item > max) max = item;
	});
	return max;
}

/* version 2 ----------------------------------------*/
const getMaxOfArray2 = function(listOfNumbers) {
	let max = listOfNumbers[0];
	listOfNumbers.forEach( item => {
		if (item > max) max = item;
	});
	return max;
};

/* version 3 ----------------------------------------*/
const getMaxOfArray3 = myList => {
	let max = myList[myList.length - 1];
	myList.forEach( num => {
		max = num > max ? num : max;
	});
	return max;
};


let myNumbers = [20, 10, 45, 100, 2, -56];
console.log(getMaxOfArray1(myNumbers));
console.log(getMaxOfArray2(myNumbers));
console.log(getMaxOfArray3(myNumbers));

/* test function for playing with different function call variants */

const myFunc = function(str) {
	console.log(this, this.myValue + str);
};

let obj = {
	myValue: "Hello!"
};

myFunc.call(this, "hello1");
myFunc.call(obj, "hello2");
myFunc.apply(this, ["hello3"]);
myFunc.apply(obj, ["hello3"]);
 
