









const vegetables = [
	{
		name: "Vegetable 1",
		image: "vegetable1.jpg",
		info: "This is some information about Vegetable 1."
	},
	// Repeat for vegetables 2-10
];

vegetables.forEach((vegetable, index) => {
	const vegElement = document.getElementById(`vegetable${index+1}`);
	vegElement.querySelector("h2").textContent = vegetable.name;
	vegElement.querySelector("img").src = vegetable.image;
	vegElement.querySelector("p").textContent = vegetable.info;
});