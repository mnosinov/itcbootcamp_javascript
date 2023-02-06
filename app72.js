const words = ["apple", "banana", "cherry", "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "apple", "banana", "cherry", "date", "elderberry"];

let processedWords = [];

// version 1.1 - 2 arrays, filter, includes
console.log('version 1.1');

console.log(
	words.filter( word => {
		if (processedWords.includes(word))
			return false;
		else {
			processedWords.push(word);
			return true;
		}
	})
);

// version 1.2 - 2 arrays, filter, includes
console.log('version 1.2');

processedWords = [];
console.log(
	words.filter( word => {
		let result = !processedWords.includes(word);
		processedWords.push(word);
		return result;
	})
);

// version 2 - 1 array filter slice includes
console.log('version 2');

console.log(words.filter( (word, index, array ) =>  !array.slice(0, index).includes(word) ));
