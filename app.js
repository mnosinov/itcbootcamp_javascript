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

console.log(getArraySum1([10, 20, 30, 35]));
console.log(getArraySum2([10, 20, 30, 35]));
console.log(getArraySum3([10, 20, 30, 35]));
