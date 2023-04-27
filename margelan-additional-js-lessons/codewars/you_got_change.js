function get_change(number) {
	const ARRAY_LEN = 6;
	const nominals = [1, 5, 10, 20, 50, 100];
	let result = [0, 0, 0, 0, 0, 0];
	for (let i = 0; i < ARRAY_LEN ; i++) {
		let nom = nominals[ARRAY_LEN - i - 1];
		result[i] = Math.floor(number / nom);
		number %= nom;
	}
	return result.reverse();
}

console.log(get_change(365)); 
console.log(get_change(217));
