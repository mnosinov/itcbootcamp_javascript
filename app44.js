let number = 9;

/* Version 1---------------------------------------------- */
function printEvenNumbers1(number) {
	for (let i = 0; i < number; i++) {
		if (i % 2 === 0) console.log(i)
	}
}

printEvenNumbers1(number);
/* Version 2---------------------------------------------- */
function printEvenNumbers2(number) {
	for (let i = 1; i < number; i += 2) console.log(i)
}

printEvenNumbers2(number);
/* Version 3---------------------------------------------- */
function printEvenNumbers3(number) {
	if (number % 2 === 0) console.log(number)
}

for (let i = 0; i < number; i++) {
	printEvenNumbers3(i);
}
/* Version 4---------------------------------------------- */
function printEvenNumbers3(number) {
	if (number % 2 === 0) {
		return number;
	} else {
		return "Number is not even";
	}
}

for (let i = 0; i < number; i++) {
	console.log(printEvenNumbers3(i));
}
/* Version 5---------------------------------------------- */
function printEvenNumbers4(number) {
	return number % 2 === 0 ? number : "Number is not even";
}

for (let i = 0; i < number; i++) {
	console.log(printEvenNumbers4(i));
}
