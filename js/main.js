document.addEventListener('DOMContentLoaded', function() {
    generateMenuItems();
    
    document.getElementById('locationSelect').addEventListener('change', function() {
        selectedLocation = this.value;
    });
});

function generateMenuItems() {
    Object.keys(menuData).forEach(section => {
        const container = document.getElementById(section);
        if (!container) return;
        
        menuData[section].forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    ${item.description ? `<div class="item-description">${item.description}</div>` : ''}
                    <button class="add-btn" onclick="addToCart('${item.name}', ${item.price})">Añadir</button>
                </div>
                <div class="item-price">${item.price.toFixed(2)}€</div>
            `;
            container.appendChild(itemElement);
        });
    });
}