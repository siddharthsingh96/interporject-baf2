const products = [
    { id: 1, name: "T-Shirt", price: 499, category: "clothes", image: "https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, name: "Sneakers", price: 1999, category: "shoes", image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 3, name: "Smart Watch", price: 4999, category: "electronics", image: "https://images.pexels.com/photos/2774066/pexels-photo-2774066.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, name: "Headphones", price: 2999, category: "electronics", image: "https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5, name: "Backpack", price: 1499, category: "accessories", image: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 6, name: "Sunglasses", price: 799, category: "accessories", image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(p => p.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    updateCartCount();
    saveCart();
}
// Display products
const productList = document.getElementById('product-list');

function showProducts(productsToShow) {
    productList.innerHTML = ''; // Clear existing products
    productsToShow.forEach(product => {
        const productCard = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

showProducts(products); // Initially load all products


// Update cart count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Save to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load from LocalStorage
function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
        cart = savedCart;
        updateCartCount();
    }
}

loadCart();
