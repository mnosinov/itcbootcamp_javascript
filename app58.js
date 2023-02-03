/* version 1 ------------------------------------*/
function getWordsListSizes1(array) {
	let result = [];
	array.forEach( (item, index) => {
		result.push(item.length);
	});
	return result;
}

/* version 2 ------------------------------------*/
const getWordsListSizes2 = (list) => {
	let result = Array();
	list.forEach( (item, index) => {
		result.push(item.length);
	});
	return result;
};

/* version 3 ------------------------------------*/
const getWordsListSizes3 = function(myList) {
	let result = [];
	myList.forEach( (item, index) => {
		result.push(item.length);
	});
	return result;
}

/* version 4 - map ------------------------------------*/
function getWordsListSizes4(array) {
	return array.map( (element) => element.length);
}

/* function for playing with different function call variants ------------------------------------*/
function myFunc(array) {
	console.log("my array", array);
}

const colors = ['red', 'blue', 'green'];

console.log(getWordsListSizes1(colors));
console.log(getWordsListSizes2(colors));
console.log(getWordsListSizes3(colors));
console.log(getWordsListSizes4(colors));
//
// differrent call variants
console.log("different call variants");
console.log(getWordsListSizes4.call(this, colors));
console.log(myFunc.apply(this, colors));
