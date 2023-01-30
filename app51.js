/* version 1 */
function multiplyString(str, multiplicator) {
	let result = "";
	for (let i = 0; i < multiplicator; i++) {
		result += str;
	}
	return result;
}

/* version 1 recursive */
function multiplyStringRecursive(str, multiplicator) {
	if (multiplicator === 1) return str;
	return str + multiplyStringRecursive(str, multiplicator - 1);
}


/* version 2 */
function multiplyStringByLen(str) {
	let result = "";
	for (let i = 0; i < str.length; i++) {
		result += str;
	}
	return result;
}

/* version 2 JS libs version */
function multiplyStringByLenJS(str) {
	return str.repeat(str.length);
}

console.log(multiplyString("word", 4));
console.log(multiplyStringRecursive("word", 4));
console.log(multiplyStringByLen("wordz"));
console.log(multiplyStringByLenJS("wordz"));
