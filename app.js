const words = ["dog", "cat", "bird", "lion", "elephant", "monkey"];

function wordsSorting(words) {
	return words.sort();
}

console.log(wordsSorting(words));

const users = [  { name: "John", age: 40 },  { name: "Jane", age: 35 },  { name: "Bob", age: 42 },  { name: "Alice", age: 30 },  { name: "Charlie", age: 38 }];

function sortByAge(people) {
	return people.sort( (a, b) => a.age - b.age );
}

console.log(sortByAge(users));

const products = [  { name: "Keyboard", price: 50 },  { name: "Mouse", price: 30 },  { name: "Headphones", price: 70 },  { name: "Monitor", price: 100 },  { name: "Speakers", price: 60 }];

const sortByPriceDesc = items => {
	return items.sort( (a, b) => b.price - a.price);
};

console.log(sortByPriceDesc(products));

const mixed = [5, "фdog", 1, "яcat", 9, "цbird", 4, "шlion", 6, "дelephant", 2, "лmonkey", 3];

const mixSorting = function(elements) {
	return elements.sort( (a, b) => {
		if (typeof a === 'number' && typeof b === 'number') return a - b;
		else if (typeof a === 'string' && typeof b === 'string') return b.localeCompare(a);
		else if (typeof a === 'number' && typeof b === 'string') return 1;
		else if (typeof a === 'string' && typeof b === 'number') return -1;
	});
}

console.log(mixSorting(mixed));
