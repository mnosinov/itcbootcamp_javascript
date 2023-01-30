function removeVowels(str) {
	let result = "";

	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (char !== "a" && char !== "e" && char !== "i" && char !== "o" &&
				char !== "u") {
			result += char;
		}
	}

	return result;
}

console.log(removeVowels("hello"));
