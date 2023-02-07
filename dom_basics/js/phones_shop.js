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
	const shoppingCartIcon = document.querySelector("#shoppingCart");

	const cartSizeElement = document.getElementById("cartSize");
	cartSizeElement.style.display = shoppingCart.length !== 0 ? "flex" : "none";
	cartSizeElement.textContent = shoppingCart.length;
}

function showCartContent() {
	const cartContentDiv = document.getElementById("cartContent");
	cartContentDiv.style.display = "flex";
	const cartItemsUl = document.getElementById("cartItems");
	cartItemsUl.innerHTML = "";

	let totalCartPrice = 0;
	for (let i = 0; i < shoppingCart.length; i++) {
		const cartItemId = shoppingCart[i];
		const item = items.find(item => item.id == cartItemId);
		cartItemsUl.innerHTML += `
			<li>
				${i + 1}. <strong>${item.name}</strong> ${item.price}$
			</li>
		`;
		totalCartPrice += item.price;
	}
	const totalCartPriceDiv = document.getElementById("totalCartPrice");
	totalCartPriceDiv.innerHTML = `Total price: $${totalCartPrice}`;
}

function displayItems(items) {
	const itemsElement = document.querySelector(".items");

	itemsElement.innerHTML = items.length ? "" : "<p class='message'>Items not found</p>";

	for (let item of items) {
		itemsElement.innerHTML +=
			`<div class="card" id="item_${item.id}">
					<div class="item-image">
						<img src="images/${item.image}" alt="${item.name} Image">
					</div>
					<div class="card-bottom">
						<div class="item-info">
							<div class="item-name">${item.name}</div>
							<div class="item-price">${item.color}</div>
							<div class="item-price">$${item.price}</div>
						</div>
						<button onclick="toggleItemInShoppingCart(${item.id})">
							<div class="add-to-shopping-cart">
								<i class='bx bx-shopping-bag'></i>
							</div>
						</button>
					</div>
			 </div>`;
	}
}

function getItemsPriceRange(items) {
	//let range = [items[0], items[0]];
	let range = [1, 34];
	items.forEach( item => {
		if (item < range[0]) {
			range[0] = item;
		} else if (item > range[1]) {
			range[1] = item;
		}
	});
	return range;
}

function createColorSelect(colorSelectElement, colors) {
	colorSelectElement.innerHTML = '<option value="">-- Select Color --</option>';
	colors.forEach( color => colorSelectElement.innerHTML += `<option value="${color}">${color}</option>` );
	colorSelectElement.addEventListener( "change", event => {
		let searchString = searchInput.value.toLowerCase();
		let filteredItems = getFilteredItems(items, searchString, selectedColorElement.value);
		displayItems(filteredItems);
	});
}

function getFilteredItems(items, searchString, selectedColor) {
	let filteredItems = items.filter(
		item => item.name.toLowerCase().includes(searchString) 
	);
	console.log(filteredItems);
	if (selectedColor) {
		console.log(selectedColor);
		console.log(filteredItems);
		filteredItems = filteredItems.filter( item => item.color === selectedColor);
	}
	console.log(filteredItems);

	return filteredItems;
}

/* -------------------- range slider initialization ----------------- BEGIN */
const rangeInput = document.querySelectorAll(".priceRangeSlider .range-input input"),
priceInput = document.querySelectorAll(".priceRangeSlider .price-input input"),
range = document.querySelector(".priceRangeSlider.slider.progress");
console.log(rangeInput);
console.log(priceInput);
console.log(range);
let priceGap = 1000;

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
    });
});
/* -------------------- range slider initialization ----------------- END */

var shoppingCart = [];

const searchInput = document.getElementById("searchInput");
const selectedColorElement = document.getElementById("selectedColor");

const showShoppingCartBtn = document.getElementById("showShoppingCart");
showShoppingCartBtn.addEventListener("click", showCartContent);
const clearSearchBtn = document.getElementById("clearSearchBtn");
clearSearchBtn.addEventListener("click", event => {
	document.getElementById("searchInput").value = "";
	let searchString = searchInput.value.toLowerCase();
	let filteredItems = getFilteredItems(items, searchString, selectedColorElement.value);
	displayItems(filteredItems);
});

const clearColorSelectBtn = document.getElementById("clearColorSelectBtn");
clearColorSelectBtn.addEventListener("click", event => {
	document.getElementById("selectedColor").value = "";
	let searchString = searchInput.value.toLowerCase();
	let filteredItems = getFilteredItems(items, searchString, selectedColorElement.value);
	displayItems(filteredItems);
});

const cartContentCloseBtn = document.getElementById("cartContentCloseBtn");
cartContentCloseBtn .addEventListener("click", () => {
	const cartContentDiv = document.getElementById("cartContent");
	cartContentDiv.style.display = "none";
});

searchInput.addEventListener("input", (event) => {
	let searchString = searchInput.value.toLowerCase();
	let filteredItems = getFilteredItems(items, searchString, selectedColorElement.value);
	displayItems(filteredItems);
});

var items = [
	{ id: 1, name: "iPHONE 12", price: 1750, image: "phone-1.jpg", color: "blue" },
	{ id: 2, name: "iPHONE 13", price: 1500, image: "phone-2.jpg", color: "sky blue" },
	{ id: 3, name: "Samsung A53", price: 500, image: "phone-3.jpg", color: "silver" },
	{ id: 4, name: "Google Pixel 7", price: 700, image: "phone-3.jpg", color: "silver" },
	{ id: 5, name: "OnePlus Nord N20 5G", price: 750, image: "phone-4.jpg", color: "black" },
	{ id: 6, name: "Samsung Galaxy A03s", price: 550, image: "phone-5.jpg", color: "grey" },
	{ id: 7, name: "Samsung Galaxy Z Flip 4", price: 1250, image: "phone-6.jpg", color: "navy" },
	{ id: 8, name: "Samsung Galaxy S22 Ultra", price: 350, image: "phone-7.jpg", color: "red" },
	{ id: 9, name: "Asus Zenfone 9", price: 700, image: "phone-8.jpg", color: "dark green" },
	{ id: 10, name: "Google Pixel 6A", price: 730, image: "phone-9.jpg", color: "grey" }
];

const uniqueColors = items.filter(
	(item, index, array) => array.slice(0, index).filter( innerItem => innerItem.color === item.color ).length === 0
).map( phone => phone.color );

createColorSelect(selectedColorElement, uniqueColors);

displayItems(items);
