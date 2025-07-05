let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product} - ₹${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: ₹${total}`;
}
