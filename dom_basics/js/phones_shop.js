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

var shoppingCart = [];

const showShoppingCartBtn = document.getElementById("showShoppingCart");
showShoppingCartBtn.addEventListener("click", showCartContent);
const clearSearchBtn = document.getElementById("clearSearchBtn");
clearSearchBtn.addEventListener("click", event => {
	document.getElementById("searchInput").value = "";
	displayItems(items);
});

const cartContentCloseBtn = document.getElementById("cartContentCloseBtn");
cartContentCloseBtn .addEventListener("click", () => {
	const cartContentDiv = document.getElementById("cartContent");
	cartContentDiv.style.display = "none";
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", (event) => {
	let searchString = searchInput.value.toLowerCase();
	let filteredItems = items.filter( item => item.name.toLowerCase().includes(searchString) );
	displayItems(filteredItems);
});

var items = [
	{ id: 1, name: "iPHONE 12", price: 1750, image: "phone-1.jpg", color: "blue" },
	{ id: 2, name: "iPHONE 13", price: 1500, image: "phone-2.jpg", color: "sky blue" },
	{ id: 3, name: "Samsung A53", price: 500, image: "phone-3.jpg", color: "silver" },
	{ id: 4, name: "Google Pixel 7", price: 700, image: "phone-3.jpg", color: "silver" },
	{ id: 5, name: "OnePlus Nord N20 5G", price: 750, image: "phone-4.jpg", color: "black" },
	{ id: 6, name: "Samsung Galaxy A03s", price: 550, image: "phone-5.jpg", color: "gray" },
	{ id: 7, name: "Samsung Galaxy Z Flip 4", price: 1250, image: "phone-6.jpg", color: "navy" },
	{ id: 8, name: "Samsung Galaxy S22 Ultra", price: 350, image: "phone-7.jpg", color: "red" },
	{ id: 9, name: "Asus Zenfone 9", price: 700, image: "phone-8.jpg", color: "dark green" },
	{ id: 10, name: "Google Pixel 6A", price: 730, image: "phone-9.jpg", color: "grey" }
];

displayItems(items);
