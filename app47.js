/* version 1 straightforward -------------------------- */
function countTotal(number) {
	let sum = 0;
	for (let i = 1; i <= number; i++ ) {
		sum += i;
	}
	return sum;
}

/* version 2 better in performance -------------------------- */
const countTotalSpeed = (number) => {
	for (let i = number - 1; i > 0; number += i--) ;
	return number;
}

/* version recursive -------------------------- */
const countTotalRecursive = function(number) {
	if (number == 1) return number;
	return number + countTotalRecursive(number - 1);
}


console.log(`Straightforward: ${countTotal(10)}`);
console.log(`Better Performance (RAM, CPU): ${countTotalSpeed(10)}`);
console.log(`Recursive: ${countTotalRecursive(10)}`);
