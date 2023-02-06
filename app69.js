// Filter an array of strings and return only those with a length greater than 4.

const strings = ['red', 'yellow', 'blue', 'black', 'white', 'orange', 'green']

function getLongStrings(list) {
	return list.filter( str => str.length > 4 );
}

const getLongStrings1 = strings => {
	return strings.filter( item => item.length > 4 );
};

const getLongStrings2 = array => {
	return array.filter( str => str.length > 4 );
}

console.log(getLongStrings(strings));
console.log(getLongStrings1(strings));
console.log(getLongStrings2(strings));
