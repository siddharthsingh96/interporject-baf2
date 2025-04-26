const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsList = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');

function updateCheckout() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        cartItemsList.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
        total += item.price;
    });
    totalPrice.innerText = `Total: ₹${total}`;
}

document.getElementById('placeOrderBtn').addEventListener('click', () => {
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    updateCheckout();
});

updateCheckout();
