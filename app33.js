function greeAPersionWithAgeAndGender(name, age=25, gender) {
	let prefix = gender === "male" ? "Mr." : "Ms.";
	return `Hello ${prefix} ${name}, you are ${age} years old. You are ${gender}`;
}

console.log(greeAPersionWithAgeAndGender("Smith", 20, "male"));
console.log(greeAPersionWithAgeAndGender("Tom", 30, "male"));
console.log(greeAPersionWithAgeAndGender("Brad", 45, "male"));
console.log(greeAPersionWithAgeAndGender("Sarah", 17, "female"));
console.log(greeAPersionWithAgeAndGender("Fil", 35, "male")");
console.log(greeAPersionWithAgeAndGender("Fil", 35, "male")");
