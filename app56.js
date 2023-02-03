const container = document.querySelector(".container");
const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach( (item, index) => {
	console.log(index, item);
	container.innerHTML += 
		`<li>${item}</li>`;
});
