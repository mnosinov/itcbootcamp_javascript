const shoppingCartIcon = document.querySelector("#shoppingCart");
const cartSizeElement = document.getElementById("cartSize");
const cartContentDiv = document.getElementById("cartContent");
const cartItemsUl = document.getElementById("cartItems");
const totalCartPriceDiv = document.getElementById("totalCartPrice");
const isMultipleColorsChoiceAllowed = document.getElementById('isMultipleColorsChoiceAllowed');
const priceRangeMin = document.getElementById('priceRangeMin');
const priceRangeMax = document.getElementById('priceRangeMax');
const searchInput = document.getElementById("searchInput");
//const selectedColorElement = document.getElementById("selectedColor");
const colorPickerElement = document.getElementById("colorPicker");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const showShoppingCartBtn = document.getElementById("showShoppingCart");
const clearColorSelectBtn = document.getElementById("clearColorSelectBtn");
const cartContentCloseBtn = document.getElementById("cartContentCloseBtn");
const sortingSelectElement = document.getElementById("sortingSelectElement");
const listViewBtn = document.getElementById("listViewBtn");
const tileViewBtn = document.getElementById("tileViewBtn");
const modal = document.querySelector(".modal");
const addItemBtn = document.getElementById("addItemBtn");

const phoneNameInput = document.querySelector(".phone-name");
const phonePriceInput = document.querySelector(".phone-price");
const phoneColorInput = document.querySelector(".phone-color");
const phoneImgInput = document.querySelector(".phone-img");
const saveNewItemBtn = document.querySelector(".save-new-item");
const errMsgP = document.querySelector(".err-msg");

modal.style.display = 'none';

// items in shopping Cart 
var shoppingCart = [];
var viewMode = "tileView";

function toggleItemInShoppingCart(itemId) {
	let index = shoppingCart.indexOf(itemId);
	// add or remove item to/from shopping cart
	const itemCardElement = document.getElementById(`item_${itemId}`);
	const addOrRemoveItemToOrFromShoppingCart = itemCardElement.querySelector(".add-to-shopping-cart");
	if (index === -1) {
		shoppingCart.push(itemId);
		addOrRemoveItemToOrFromShoppingCart.style.backgroundColor = "orange";
	} else {
		shoppingCart.splice(index, 1);
		addOrRemoveItemToOrFromShoppingCart.style.backgroundColor = "black";
	}
	cartSizeElement.style.display = shoppingCart.length !== 0 ? "flex" : "none";
	cartSizeElement.textContent = shoppingCart.length;
}

function showCartContent() {
	cartContentDiv.style.display = "flex";
	cartItemsUl.innerHTML = "";

	let totalCartPrice = 0;
	for (let i = 0; i < shoppingCart.length; i++) {
		const cartItemId = shoppingCart[i];
		const item = items.find(item => item.id == cartItemId);
		cartItemsUl.innerHTML += `<li>${i + 1}. <strong>${item.name}</strong>&nbsp;${item.price}$</li>`;
		totalCartPrice += item.price;
	}
	totalCartPriceDiv.innerHTML = `Total price: $${totalCartPrice}`;
}

function displayItems(items) {
	let searchString = searchInput.value.toLowerCase();
	let filteredItems = getFilteredItems(items, searchString);

	const itemsElement = document.querySelector(".items");

	itemsElement.innerHTML = filteredItems.length ? "" : "<p class='message'>Items not found</p>";
	// sorting
	let sortingOrder = sortingSelectElement.value; 
	if (sortingOrder === 'price_asc') {
		filteredItems.sort( (a, b) => a.price - b.price );
	} else if (sortingOrder === 'price_desc') {
		filteredItems.sort( (a, b) => b.price - a.price );
	} else if (sortingOrder === 'name_asc') {
		filteredItems.sort( (a, b) => a.name.localeCompare(b.name) );
	} else if (sortingOrder === 'name_desc') {
		filteredItems.sort( (a, b) => b.name.localeCompare(a.name) );
	}

	for (let item of filteredItems) {
		if (viewMode === "tileView") {
			itemsElement.innerHTML +=
				`<div class="card" id="item_${item.id}">
						<div class="item-image">
							<img src="images/${item.image}" alt="${item.name} Image">
						</div>
						<div class="card-info">
							<div class="item-info">
								<div class="item-name">${item.name}</div>
								<div class="item-price">${item.color}</div>
								<div class="item-price">$${item.price}</div>
							</div>
							<button onclick="toggleItemInShoppingCart(${item.id})">
								<div class="add-to-shopping-cart"><i class='bx bx-shopping-bag'></i> </div>
							</button>
							<button class="delBtn" data-id="${item.id}">Delete</button>
						</div>
				</div>`;
		} else if (viewMode === "listView") {
			itemsElement.innerHTML +=
				`<div class="card-listView" id="item_${item.id}">
						<div class="item-image">
							<img src="images/${item.image}" alt="${item.name} Image">
						</div>
						<div class="card-info">
							<div class="item-info">
								<div class="item-name">${item.name}</div>
								<div class="item-price">${item.color}</div>
								<div class="item-price">$${item.price}</div>
							</div>
							<button onclick="toggleItemInShoppingCart(${item.id})">
								<div class="add-to-shopping-cart"><i class='bx bx-shopping-bag'></i> </div>
							</button>
							<button class="delBtn" data-id="${item.id}">Delete</button>
						</div>
				</div>`;
		}

	}

	const delBtns = document.querySelectorAll(".delBtn");
	for (let index = 0; index < delBtns.length; index++) {
		const btn = delBtns[index];
		btn.addEventListener("click", event => {
			console.log(filteredItems);
			let indexOfItemToDelete = items.findIndex( item => item.id === +btn.dataset.id);
			console.log(btn.dataset.id);
			console.log(indexOfItemToDelete);
			items.splice(indexOfItemToDelete, 1);
			displayItems(items);
		});
	}
}

/* select element for color selection is hidden now, because colors buttons aka ColorPicker had been implemented */
/*
function createColorSelect(colorSelectElement, colors) {
	colorSelectElement.innerHTML = '<option value="">-- Select Color --</option>';
	colors.forEach( color => colorSelectElement.innerHTML += `<option value="${color}">${color}</option>` );
	colorSelectElement.addEventListener( "change", event => {
		displayItems(items);
	});
}
*/

function colorPicker(colorPickerElement, colors) {
	// save selected colors if they are exists
	const colorBtns = document.querySelectorAll(".colorBtn");
	let selectedColors = [];
	for (let colorBtn of colorBtns)
		if (colorBtn.style.borderColor === 'red') selectedColors.push(colorBtn.style.backgroundColor.toLowerCase());

	colorPickerElement.innerHTML = '';

	for (let color of colors) {
		const colorBtn = document.createElement('button');
		colorBtn.classList.add('colorBtn');
		colorBtn.title = color;
		colorBtn.style.backgroundColor = color;
		colorBtn.addEventListener( "click", event => {
			const selectedColorBtn = event.target;
			if (!isMultipleColorsChoiceAllowed.checked) {
				// single color filter applied - clear colors selection
				const selectedColorsBtns = document.querySelectorAll('.selectedColorBtn');
				for (let btn of selectedColorsBtns) {
					btn.classList.remove("selectedColorBtn");
				}
			}
			selectedColorBtn.classList.toggle('selectedColorBtn');
			displayItems(items);
		});
		// restore colors selection
		if (selectedColors.includes(color)) {
			colorBtn.classList.add('selectedColorBtn');
		}
		colorPickerElement.appendChild(colorBtn);
	}
}

function getFilteredItems(items, searchString) {
	let filteredItems = items.filter(
		item => item.name.toLowerCase().includes(searchString) 
	);

	// extract selected colors
	const selectedColorBtns = document.querySelectorAll(".selectedColorBtn");

	let selectedColors = [];
	for (let btn of selectedColorBtns)
		selectedColors.push(btn.style.backgroundColor.toLowerCase());

	if (selectedColors.length !== 0) {
		filteredItems = filteredItems.filter( item => selectedColors.includes(item.color.toLowerCase()) );
	}

	// apply price range
	const priceRangeMinValue = document.getElementById('priceRangeMinValue').value;
	const priceRangeMaxValue = document.getElementById('priceRangeMaxValue').value;
	filteredItems = filteredItems.filter( item => item.price >= priceRangeMinValue && item.price <= priceRangeMaxValue);

	return filteredItems;
}

/* -------------------- range slider initialization ----------------- BEGIN */
function setupPriceRange() {
	// find max price
	const maxPrice = items.reduce( (maxValue, curItem) => curItem.price > maxValue ? curItem.price : maxValue, items[0].price);

	document.getElementById('priceRangeMaxValue').value = maxPrice;

	priceRangeMin.max = maxPrice;
	priceRangeMax.max = maxPrice;
	priceRangeMax.value = maxPrice;

	const rangeInput = document.querySelectorAll(".priceRangeSlider .range-input input"),
	priceInput = document.querySelectorAll(".priceRangeSlider .price-input input"),
	range = document.querySelector(".priceRangeSlider .slider .progress");
	let priceGap = 1;

	priceInput.forEach(input =>{
			input.addEventListener("input", e =>{
					let minPrice = parseInt(priceInput[0].value),
					maxPrice = parseInt(priceInput[1].value);
					
					if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
							if(e.target.className === "input-min"){
									rangeInput[0].value = minPrice;
									range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
							}else{
									rangeInput[1].value = maxPrice;
									range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
							}
					}
					document.getElementById("searchInput").value = "";
					displayItems(items);
			});
	});

	rangeInput.forEach(input =>{
			input.addEventListener("input", e =>{
					let minVal = parseInt(rangeInput[0].value),
					maxVal = parseInt(rangeInput[1].value);

					if((maxVal - minVal) < priceGap){
							if(e.target.className === "range-min"){
									rangeInput[0].value = maxVal - priceGap
							}else{
									rangeInput[1].value = minVal + priceGap;
							}
					}else{
							priceInput[0].value = minVal;
							priceInput[1].value = maxVal;
							range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
							range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
					}
					document.getElementById("searchInput").value = "";
					displayItems(items);
			});
	});
}

/* -------------------- range slider initialization ----------------- END */

showShoppingCartBtn.addEventListener("click", showCartContent);
clearSearchBtn.addEventListener("click", event => {
	document.getElementById("searchInput").value = "";
	displayItems(items);
});

clearColorSelectBtn.addEventListener("click", event => {
	// drop down list - select tag
	document.getElementById("selectedColor").value = "";

	// color buttons
	const selectedColorBtns = document.querySelectorAll(".selectedColorBtn");
	for (let btn of selectedColorBtns) {
		btn.classList.remove("selectedColorBtn");
	}

	displayItems(items);
});

cartContentCloseBtn.addEventListener("click", () => {
	const cartContentDiv = document.getElementById("cartContent");
	cartContentDiv.style.display = "none";
});

searchInput.addEventListener("input", (event) => {
	displayItems(items);
});

sortingSelectElement.addEventListener("change", event => {
	displayItems(items);
});

listViewBtn.addEventListener("click", event => {
	viewMode = "listView";
	displayItems(items);
});
tileViewBtn.addEventListener("click", event => {
	viewMode = "tileView";
	displayItems(items);
});

var items = [
	{ id: 1, name: "iPHONE 12", price: 1750, image: "phone-1.jpg", color: "blue" },
	{ id: 2, name: "iPHONE 13", price: 1500, image: "phone-2.jpg", color: "SkyBlue" },
	{ id: 3, name: "Samsung A53", price: 500, image: "phone-3.jpg", color: "silver" },
	{ id: 4, name: "Google Pixel 7", price: 700, image: "phone-3.jpg", color: "silver" },
	{ id: 5, name: "OnePlus Nord N20 5G", price: 750, image: "phone-4.jpg", color: "black" },
	{ id: 6, name: "Samsung Galaxy A03s", price: 550, image: "phone-5.jpg", color: "grey" },
	{ id: 7, name: "Samsung Galaxy Z Flip 4", price: 1250, image: "phone-6.jpg", color: "navy" },
	{ id: 8, name: "Samsung Galaxy S22 Ultra", price: 350, image: "phone-7.jpg", color: "red" },
	{ id: 9, name: "Asus Zenfone 9", price: 700, image: "phone-8.jpg", color: "DarkGreen" },
	{ id: 10, name: "Google Pixel 6A", price: 730, image: "phone-9.jpg", color: "grey" }
];


function setupColorsFilter() {
	uniqueColors = items.filter(
		(item, index, array) => array.slice(0, index).filter( innerItem => innerItem.color === item.color ).length === 0
	).map( phone => phone.color );
	return uniqueColors
}

var uniqueColors = setupColorsFilter();

isMultipleColorsChoiceAllowed.addEventListener("input", event => {
	clearColorSelectBtn.click();
});

addItemBtn.addEventListener("click", event => {
	modal.style.display = "flex";
});

window.addEventListener("keydown", event => {
	if (event.key === "Escape") {
		modal.style.display = 'none';
		clearNewItemInputFields();
	}
});

saveNewItemBtn.addEventListener("click", event => {
	let itemToSave = {
		id: items.reduce( (accumulator, element) => accumulator < element.id ? element.id : accumulator , 0) + 1,
		name: phoneNameInput.value,
		price: phonePriceInput.value,
		image: phoneImgInput.value,
		color: phoneColorInput.value
	};

	if (phoneNameInput.value !== "" && phonePriceInput.value !== "" && phoneImgInput.value !== "" && phoneColorInput !== "") {
		items.push(itemToSave);
		console.log(items);
		// hide modal window
		modal.style.display = "none";
		clearNewItemInputFields();

		setupPriceRange();
		//colorPicker(colorPickerElement, uniqueColors);
		displayItems(items);
		console.log(items);
		errMsgP.innerHTML = "";
	} else {
		errMsgP.innerHTML = "All Fields are mandatory"; 
	}
});

function clearNewItemInputFields() {
	phoneNameInput.value = '';
	phonePriceInput.value = '';
	phoneColorInput.value = '';
	phoneImgInput.value = '';
	errMsgP.innerHTML = ""; 
}

setupPriceRange();

//createColorSelect(selectedColorElement, uniqueColors);
colorPicker(colorPickerElement, uniqueColors);

displayItems(items);


