// new operators in javascript
// ??, =??, ?, !!

const obj = {
	name: undefined,
	age: undefined
}

console.log(obj?.name);
console.log(obj.name ?? 'Nothing');


console.log(!!obj.age);
obj.age ??= 18;
console.log(obj.age);

console.log(!!obj.age);
