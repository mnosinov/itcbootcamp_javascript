/* version 1 Straightforward ------------------------------- */
function reverseStringStraightForward(str) {
	let result = "";
	for (let i = str.length - 1; i >= 0; i--) 
		result += str[i];

	return result;
}

/* version 2 Recursive ------------------------------- */
function reverseStringRecursive(str) {
	if (str == "") return "";
	return str[str.length - 1] + reverseStringRecursive(str.substring(0, str.length - 1));
}

/* version 3 JS libs, converting to array ------------------ */
function reverseStringJSLibs(str) {
	let afterSplit = str.split("");
	console.log(afterSplit);
	let afterReverse = afterSplit.reverse();
	console.log(afterReverse);
	let afterJoin = afterReverse.join("");
	console.log(afterJoin);
	return afterJoin;
	//return str.split("").reverse().join("");
}

console.log(reverseStringStraightForward("hello"));
console.log(reverseStringRecursive("hello"));
console.log(reverseStringJSLibs("hello"));
