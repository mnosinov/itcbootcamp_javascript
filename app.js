/* version 1 Straightforward ------------------------------- */
function reverseStringEvenUpperCaseStraightForward(str) {
	let result = "";
	for (let i = str.length - 1; i >= 0; i--) {
		let letter = str[i];
		if (i % 2 != 0) letter = letter.toUpperCase();
		result += letter;
	}

	return result;
}

/* version 2 Recursive ------------------------------- */
function reverseStringEvenUpperCaseRecursive(str) {
	if (str == "") return "";
	let strLen = str.length;
	let letter = str[strLen - 1];
	if ((strLen - 1) % 2 != 0) letter = letter.toUpperCase();
	return  letter + reverseStringEvenUpperCaseRecursive(str.substring(0, strLen - 1));
}

/* version 3 JS libs, converting to array ------------------ */
function reverseEvenUpperCaseStringJSLibs(str) {
	let afterSplit = str.split("");
	let afterReverse = afterSplit.reverse();
	for (let i = 0; i < afterReverse.length; i++) {
		if (i % 2 != 0) afterReverse[i] = afterReverse[i].toUpperCase();
	}
	let afterJoin = afterReverse.join("");
	return afterJoin;
}

console.log(reverseStringEvenUpperCaseStraightForward("hello"));
console.log(reverseStringEvenUpperCaseRecursive("hello"));
console.log(reverseEvenUpperCaseStringJSLibs("hello"));
