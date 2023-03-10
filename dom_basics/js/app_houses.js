function addInfoItemAsP(object, itemName, label, containerToAddTo, asHtmlElement) {
	const p = document.createElement(asHtmlElement);
	if (label) {
		p.textContent = `${label}: ${object[itemName]}`;
	} else {
		p.textContent = object[itemName];
	}
	containerToAddTo.appendChild(p);
	return p;
}

const container = document.querySelector(".container");

const houses = [
	{
		name: "Cozy Cottage",
		type: "cottage",
		address: "123 Main st",
		area: 127,
		cost: 1000,
		numOfRooms: 5,
		image: "http://cdn.home-designing.com/wp-content/themes/homedesigning-theme-last-12/images/landing/modern-house-exterior.jpg",
		newAd: true
	},
	{
		name: "Luxary Mansion",
		type: "villa",
		address: "456 Park Ave",
		area: 300,
		cost: 2000,
		numOfRooms: 7,
		image: "http://cdn.home-designing.com/wp-content/uploads/2015/03/two-story-box-home.jpg",
		newAd: true
	},
	{
		name: "Apartment",
		type: "detached",
		address: "789 Mapple St",
		area: 200,
		cost: 1500,
		numOfRooms: 3,
		image: "http://cdn.home-designing.com/wp-content/uploads/2015/03/brick-home-design-ideas.jpg",
		newAd: false
	},
	{
		name: "TownHouse",
		type: "semidetached",
		address: "7th Ave",
		area: 600,
		cost: 3000,
		numOfRooms: 10,
		image: "https://i.ytimg.com/vi/ApgSiH_PWr4/maxresdefault.jpg",
		newAd: true
	}
];

/*
for (let i = 0; i < houses.length; i++) {
	const card = document.createElement("div");
	// image
	const img = document.createElement("img");
	card.appendChild(img);
	img.src =  houses[i].image;
	img.classList.add("item-image");
	// add item info as p and h1
	addInfoItemAsP(houses[i], "name", "", card, "h1");
	addInfoItemAsP(houses[i], "type", "Type", card, "p");
	addInfoItemAsP(houses[i], "address", "Address", card, "p");
	let area = addInfoItemAsP(houses[i], "area", "Area", card, "p");
	addInfoItemAsP(houses[i], "cost", "Price", card, "p");
	addInfoItemAsP(houses[i], "numOfRooms", "Number of rooms", card, "p");
	// colorize area
	let areaClass = "areaLessThan200";

	if (houses[i].area >= 200 && houses[i].area < 300) {
		areaClass = "areaLessThan300AndMoreThan200"; 
	} else if (house.area >= 300) {
		areaClass = "areaThan300"; 
	}
	area.classList.add(areaClass); 

	// new advertisement
	if (houses[i].newAd) {
		const newMark = document.createElement("img");
		newMark.src = "images/new.png";
		newMark.classList.add("new-mark");
		newMark.classList.add("rotated");
		card.appendChild(newMark);
	}

	// add card to container
	card.classList.add("card");
	container.appendChild(card);
}
*/

for (let i = 0; i < houses.length; i++) {
	const house = houses[i];

	let areaClass = "areaLessThan200";

	if (house.area >= 200 && house.area < 300) {
		areaClass = "areaLessThan300AndMoreThan200"; 
	} else if (house.area >= 300) {
		areaClass = "areaThan300"; 
	}

	container.innerHTML += `
		<div class="card">
			${ house.newAd ? "<img src='images/new.png' alt='New Advertisement' class='new-mark'>" : '' }
			<img src="${house.image}" alt="image" class="item-image">
			<h1>${house.name}</h1>
			<p>Type: ${house.type}</p>
			<p>Address: ${house.address}</p>
			<p>Area: <span class="${areaClass}">${house.area}</span></p>
			<p>Price: ${house.cost}</p>
			<p>Number of rooms: ${house.numOfRooms}</p>
		</div>`;
}

