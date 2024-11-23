// get the card and cart items elements
const itemCard = document.getElementById('item-card');
const cartItemsList = document.getElementById('cart-items-list');

// assume we have an array to store the cart items
let cartItems = [];

// add an event listener to the card
itemCard.addEventListener('click', () => {
  // get the item to be added to the cart (e.g. from a data attribute)
  const item = { name: 'Item 1', price: 10.99 };

  // add the item to the cart
  cartItems.push(item);

  // update the cart items list
  cartItemsList.innerHTML = '';
  cartItems.forEach((item) => {
    const cartItemHTML = `
      <div class="card mb-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">$${item.price}</p>
        </div>
      </div>
    `;
    cartItemsList.innerHTML += cartItemHTML;
  });
});