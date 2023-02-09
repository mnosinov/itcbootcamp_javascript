/*
 * Write a function that takes the data object and a name as a parameter and returns the first employee object that has the same name.
*/

const data = {
  employees: [
    { name: "John", age: 32, position: "Manager" },
    { name: "Jane", age: 28, position: "Developer" },
    { name: "Bob", age: 35, position: "Designer" },
    { name: "Steve", age: 40, position: "Developer" },
  ],
  projects: [
    { name: "Project A", deadline: "01/01/2022", manager: "John" },
    { name: "Project B", deadline: "01/02/2022", manager: "Jane" },
    { name: "Project C", deadline: "01/03/2022", manager: "Bob" },
  ],
};


const findEmployeeByName = (data, empName) => {
	return data.employees.find( emp => emp.name === empName);
};

const findEmployeeByAnyParam = (data, propertyValueToFind) => {
	return data.employees.find( emp => {

		for (let prop in emp)
			if (emp[prop] === propertyValueToFind) return emp;

		return undefined;
	});
};

const findEmployeeByAnyParam1 = (data, propertyValueToFind) => {
	console.log(Object.keys(data.employees));
	return data.employees.find( emp => Object.values(emp).includes(propertyValueToFind));
};

const findProjectByManager = (data, managerName) => {
	return data.projects.find( proj => proj.manager === managerName);
};

console.log(findEmployeeByName(data, "Bob"));
console.log(findEmployeeByName(data, "Steve"));

console.log(findEmployeeByAnyParam(data, "Bob"));
console.log(findEmployeeByAnyParam(data, "Designer"));
console.log(findEmployeeByAnyParam(data, 40));
console.log(findEmployeeByAnyParam(data, "Manager"));
console.log(findEmployeeByAnyParam(data, "Team Lead"));

console.log(findEmployeeByAnyParam1(data, "Manager"));

console.log(findProjectByManager(data, "Jane"));
console.log(findProjectByManager(data, "Bob"));

/* Write a function that takes the data object and a project name as a parameter and returns the first project object that has the same name. */

function findProjectByName(obj, projName) {
	return obj["projects"].find( proj => proj.name === projName );
}

console.log('-----------');
console.log(findProjectByName(data, "Project A"));
