function getFirstLetter1(list) {
	return list.map( (item, index, array) => { return item[0]; })
}

const getFirstLetter2 = function(myList) {
	return myList.map( (element, index, array) => { return element[0] + element.slice(-1); })
};

const getFirstLetter3 = myList => {
	return myList.map( (element, index, array) => { return element[0] + element[element.length - 1]; })
};

const fruits = ['apple', 'banana', 'cherry'];
console.log(getFirstLetter1(fruits));
console.log(getFirstLetter2(fruits));
console.log(getFirstLetter3(fruits));
