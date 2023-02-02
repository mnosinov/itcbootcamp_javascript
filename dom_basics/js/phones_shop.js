items = [
	{
		name: "iPHONE 12",
		price: 1750,
		image: "phone-1.jpg"
	},
	{
		name: "iPHONE 13",
		price: 1500,
		image: "phone-2.jpg"
	},
	{
		name: "Samsung A53",
		price: 500,
		image: "phone-3.jpg"
	},
	{
		name: "Google Pixel 7",
		price: 700,
		image: "phone-3.jpg"
	},
	{
		name: "OnePlus Nord N20 5G",
		price: 750,
		image: "phone-4.jpg"
	},
	{
		name: "Samsung Galaxy A03s",
		price: 550,
		image: "phone-5.jpg"
	},
	{
		name: "Samsung Galaxy Z Flip 4",
		price: 1250,
		image: "phone-6.jpg"
	},
	{
		name: "Samsung Galaxy S22 Ultra",
		price: 350,
		image: "phone-7.jpg"
	},
	{
		name: "Asus Zenfone 9",
		price: 700,
		image: "phone-8.jpg"
	},
	{
		name: "Google Pixel 6A",
		price: 730,
		image: "phone-9.jpg"
	}
];

const itemsElement = document.querySelector(".items");

for (let item of items) {
	itemsElement.innerHTML +=
		`<div class="card">
				<div class="item-image">
					<img src="images/${item.image}" alt="${item.name} Image">
				</div>
				<div class="card-bottom">
					<div class="item-info">
						<div class="item-name">${item.name}</div>
						<div class="item-price">$${item.price}</div>
					</div>
					<button>
						<div class="add-to-shopping-cart">
							<i class='bx bx-shopping-bag'></i>
						</div>
					</button>
				</div>
		 </div>`;
}
