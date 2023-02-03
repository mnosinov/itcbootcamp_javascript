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

const colors = ['red', 'blue', 'green'];

console.log(getWordsListSizes1(colors));
console.log(getWordsListSizes2(colors));
console.log(getWordsListSizes3(colors));
console.log(getWordsListSizes4(colors));
