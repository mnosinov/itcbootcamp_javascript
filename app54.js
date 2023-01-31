/* version 1 Straightforward---------------------------------- */
function substituteLetterInStr(str, letterToSubstitue, substitutionLetter) {
	let result = "";
	for (let i = 0; i < str.length; i++)
		result += str[i] === letterToSubstitue ? substitutionLetter : str[i];
	return result;
}


/* version 2 with js function replace ---------------------------------- */
function substituteLetterInStr1(str, letterToSubstitue, substitutionLetter) {
	return str.replaceAll(letterToSubstitue, substitutionLetter);
}

console.log(substituteLetterInStr("hello world", "l", "x"));
console.log(substituteLetterInStr1("hello world", "l", "x"));
