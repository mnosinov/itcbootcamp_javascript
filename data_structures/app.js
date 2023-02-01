const person = {
	firstName: "John",
	lastName: "Doe",
	occupation: "Butcher",
	yearOfBirth: 1990,
	gender: "male"
}

console.log(person);

//person = 12;

person.occupation = "Smith";
console.log(person);

person["occupation"] = "Driver";
console.log(person);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.gender);

console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["gender"]);

console.log(person);
person.childrenQuantity = 3;
console.log(person);
person["nationality"] = "Russia";
console.log(person);

const colors = ['red', 'yellow', 'pink', 'orange', 'black', 'white', 123];

for (let i = 0; i < colors.length; i++) {
	const element = colors[i];
	console.log(element);
}

let strings = ["ab", "ABC", "zzz", "Hello", "World"];

for (let i = 0; i < strings.length; i++) {
	console.log(strings[i]);
}

for (let word of strings) {
	console.log(word);
}
