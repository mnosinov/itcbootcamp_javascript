/* version 1 ------------------------------------*/
function getArraySum1(array) {
	let sum = 0;
	array.forEach( (item, index) => {
		sum += item;
	});
	return sum;
}

/* version 2 ------------------------------------*/
const getArraySum2 = (list) => {
	let sum = 0;
	list.forEach( (item, index) => {
		sum += item;
	});
	return sum;
};

/* version 3 ------------------------------------*/
const getArraySum3 = function(myList) {
	let totalSum = 0;
	myList.forEach( (item, index) => {
		totalSum += item;
	});
	return totalSum;
}

let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(getArraySum1(myArray));
console.log(getArraySum2(myArray));
console.log(getArraySum3(myArray));
