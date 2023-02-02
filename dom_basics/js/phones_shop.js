var shoppingCart = [];

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

items = [
	{
		id: 1,
		name: "iPHONE 12",
		price: 1750,
		image: "phone-1.jpg"
	},
	{
		id: 2,
		name: "iPHONE 13",
		price: 1500,
		image: "phone-2.jpg"
	},
	{
		id: 3,
		name: "Samsung A53",
		price: 500,
		image: "phone-3.jpg"
	},
	{
		id: 4,
		name: "Google Pixel 7",
		price: 700,
		image: "phone-3.jpg"
	},
	{
		id: 5,
		name: "OnePlus Nord N20 5G",
		price: 750,
		image: "phone-4.jpg"
	},
	{
		id: 6,
		name: "Samsung Galaxy A03s",
		price: 550,
		image: "phone-5.jpg"
	},
	{
		id: 7,
		name: "Samsung Galaxy Z Flip 4",
		price: 1250,
		image: "phone-6.jpg"
	},
	{
		id: 8,
		name: "Samsung Galaxy S22 Ultra",
		price: 350,
		image: "phone-7.jpg"
	},
	{
		id: 9,
		name: "Asus Zenfone 9",
		price: 700,
		image: "phone-8.jpg"
	},
	{
		id: 10,
		name: "Google Pixel 6A",
		price: 730,
		image: "phone-9.jpg"
	}
];


const itemsElement = document.querySelector(".items");

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
