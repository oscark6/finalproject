









const vegetables = [
	{
		name: "Spinach",
		image: "https://greenspoon.co.ke/wp-content/uploads/2022/02/Greenspoon-Spinach-Mlango-Farm-1.jpg",
		info: "green vegatable"
	},
	
];


const quickShopButtons = document.querySelectorAll('.quick-shop-button');

quickShopButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.parentElement.querySelector('h2').innerText;
    const productPrice = button.parentElement.querySelector('p').innerText;

    
    addToQuickShop(productName, productPrice);
  });
});

function addToQuickShop(productName, productPrice) {
  const quickShopList = document.querySelector('.quick-shop-list');
  const listItem = document.createElement('li');
  listItem.innerText = `${productName} - ${productPrice}`;
  quickShopList.appendChild(listItem);
}