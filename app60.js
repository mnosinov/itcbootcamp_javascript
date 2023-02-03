/* version 1 ----------------------------------------*/
function getMinOfArray1(numbers) {
	//let min = numbers[0];
	let min = Infinity;
	numbers.forEach( (item, index) => {
		if (item < min) min = item;
	});
	return min;
}

/* version 2 ----------------------------------------*/
const getMinOfArray2 = function(listOfNumbers) {
	let min = listOfNumbers[0];
	listOfNumbers.forEach( item => {
		if (item < min) min = item;
	});
	return min;
};

/* version 3 ----------------------------------------*/
const getMinOfArray3 = myList => {
	let min = myList[myList.length - 1];
	myList.forEach( num => {
		min = num < min ? num : min;
	});
	return min;
};

let myNumbers = [20, 10, 45, 100, 2, -56];
console.log(getMinOfArray1(myNumbers));
console.log(getMinOfArray2(myNumbers));
console.log(getMinOfArray3(myNumbers));

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
 
/* -------------- */
console.log( (1.0000000000000002 === 1) );
console.log( (1.000000000000000111 === 1) );
