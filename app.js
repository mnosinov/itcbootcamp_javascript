function addNumber1(list, increment) {
	return list.map( (element, index, array) => { return element + increment; });
}

function addNumber2(list, increment, operation) {
	return list.map( element => { 
		switch (operation) {
			case "+":
				return element + increment;
			case "-":
				return element - increment;
			case "*":
				return element * increment;
			case "/":
				return element === 0 && increment === 0 ? 0 : element / increment;
		}
	});
}

console.log(addNumber1([1,2,3,4], 10));
console.log(addNumber1([-1, 0, 1, 2], -5));

console.log("flexible math operations");

let nums = [-1, 0, 1, 2];
console.log(addNumber2(nums, -5, "+"));
console.log(addNumber2(nums, -5, "-"));
console.log(addNumber2(nums, -5, "*"));
console.log(addNumber2(nums, -5, "/"));
console.log(addNumber2(nums, 0, "/"));

