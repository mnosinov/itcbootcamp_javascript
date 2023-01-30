/* version 1 Straightforward------------------ */
function replaceLetter(str, pos, letter) {
	if (pos >= str.length) return str;
	let result = "";
	for (let i = 0; i < str.length; i++)
		if (i === pos) result += letter; else result += str[i];
	return result;
}

/* version 2 Straightforward enhanced-------------------------------- */
function replaceLetter1(str, pos, letter) {
	if (pos >= str.length) return str;
	let result = "";
	for (let i = 0; i < str.length; i++)
		result += i === pos ? letter : str[i];
	return result;
}

/* version 3 Converting into arrays-------------------------------- */
function replaceLetter2(str, pos, letter) {
	if (pos >= str.length) return str;
	let charArr = str.split("");
	charArr[pos] = letter;
	return charArr.join("");
}

/* version 4 with substring function-------------------------------- */
function replaceLetter3(str, pos, letter) {
	if (pos >= str.length) return str;
	return str.substring(0, pos) + letter + str.substring(pos + 1, str.length);
}

/* version 5 with replace function-------------------------------- */
function replaceLetter4(str, pos, letter) {
	if (pos >= str.length) return str;
	return str.replace(
}

console.log(replaceLetter("hello", 2, "yw"));
console.log(replaceLetter("hello", 20, "yw"));
console.log(replaceLetter1("hello", 2, "yw"));
console.log(replaceLetter2("hello", 2, "yw"));
console.log(replaceLetter3("hello", 2, "yw"));
