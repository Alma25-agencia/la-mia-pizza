let cart = [];
let selectedLocation = '';

function addToCart(name, price) {
    if (!selectedLocation) {
        alert('Por favor, selecciona un local primero');
        return;
    }

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({name, price, quantity: 1});
    }
    updateCartDisplay();
}

function changeQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartFloat = document.getElementById('cartFloat');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCount.textContent = totalItems;
    cartFloat.style.display = totalItems > 0 ? 'block' : 'none';
    
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.price.toFixed(2)}€</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                <span class="qty-display">${item.quantity}</span>
                <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
            </div>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = `Total: ${total.toFixed(2)}€`;
}

function openCart() {
    document.getElementById('cartModal').style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function sendOrder() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    const locationSelect = document.getElementById('locationSelect');
    const locationText = locationSelect.options[locationSelect.selectedIndex].text;
    
    let message = `🍕 *NUEVO PEDIDO - LA MIA PIZZA*\n\n`;
    message += `📍 *Local:* ${locationText}\n\n`;
    message += `*Pedido:*\n`;
    
    let total = 0;
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - ${(item.price * item.quantity).toFixed(2)}€\n`;
        total += item.price * item.quantity;
    });
    
    message += `\n💰 *Total: ${total.toFixed(2)}€*\n\n`;
    message += `¡Gracias por tu pedido! Te confirmamos en breve.`;
    
    const whatsappUrl = `https://wa.me/34936072070?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}