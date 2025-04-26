const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

const product = products.find(p => p.id === productId);

if (product) {
    document.getElementById('productImage').src = product.image;
    document.getElementById('productName').innerText = product.name;
    document.getElementById('productPrice').innerText = `₹${product.price}`;
    document.getElementById('productDescription').innerText = product.description || 'No description available';
}

document.getElementById('addToCartBtn').addEventListener('click', () => {
    addToCart(productId);
    alert('Added to cart');
});
