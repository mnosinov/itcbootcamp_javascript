const people = [
	{
		name: "John",
		age: 23
	},
	{
		name: "Gary",
		age: 46
	},
	{
		name: "Bob",
		age: 12
	},
	{
		name: "Richard",
		age: 80
	}
];

function objectValues1(listOfObjects, propertyName) {
	return listOfObjects.map( (element, index, array) => { return element[propertyName] }).sort();
}

const objectValues2 = function(myList, key) {
	return myList.map( elem => { return elem[key]; }).sort();
};

const objectValues3 = (list, property) => {
	return list.map( item => { return item[property]; }).sort();
};

function getAgesSum1(listOfObjects) {
	return listOfObjects.reduce( (accumulator, currValue, index, array) => { return accumulator + currValue.age; }, 0);
}

function getAgesSum2() {
	return this.reduce( (accumulator, currValue, index, array) => { return accumulator + currValue.age; }, 0);
}

const getAgesSum3 = function() {
	return this.reduce( (accumulator, currValue, index, array) => { return accumulator + currValue.age; }, 0);
}

const getAgesSum4 = () => {
	return this.reduce( (accumulator, currValue, index, array) => { return accumulator + currValue.age; }, 0);
}

console.log(objectValues1(people, 'name'));
console.log(objectValues1(people, 'age'));

console.log(objectValues2(people, 'name'));
console.log(objectValues2(people, 'age'));

console.log(objectValues3(people, 'name'));
console.log(objectValues3(people, 'age'));

console.log(objectValues1.call(this, people, 'name'));
console.log(objectValues1.apply(this, [people, 'age']));

console.log(objectValues2.call(this, people, 'name'));
console.log(objectValues2.apply(this, [people, 'age']));

console.log(objectValues3.call(this, people, 'name'));
console.log(objectValues3.apply(this, [people, 'age']));

console.log(getAgesSum1(people));

console.log('call');

console.log(getAgesSum2.call(people));
console.log(getAgesSum3.call(people));
// console.log(getAgesSum4.call(people)); // this is an erro

console.log('apply');
console.log(getAgesSum2.apply(people, []));
console.log(getAgesSum3.apply(people));
