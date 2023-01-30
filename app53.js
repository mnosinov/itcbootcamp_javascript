/* version 1 Straightforward---------------------------------- */
function letterToUpperCase(str, letter) {
	let result = "";
	for (let i = 0; i < str.length; i++)
		result += str[i] === letter ? letter.toUpperCase() : str[i];
	return result;
}


/* version 2 with js function replace ---------------------------------- */
function letterToUpperCase1(str, letter) {
	return str.replaceAll(letter, letter.toUpperCase());
}

console.log(letterToUpperCase("hello world", "l"));
console.log(letterToUpperCase1("hello world", "l"));
