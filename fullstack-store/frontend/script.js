const productListElement = document.getElementById('product-list');

// Получаем данные о продуктах с сервера
async function fetchProducts() {
  const response = await fetch('http://localhost:5000/api/products');
  const products = await response.json();

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h2>${product.name}</h2>
      <p>Цена: ${product.price} руб.</p>
      <button onclick="addToCart(${product.id})">Добавить в корзину</button>
    `;
    productListElement.appendChild(productElement);
  });
}

// Функция для добавления товара в корзину
function addToCart(productId) {
  alert(`Товар ${productId} добавлен в корзину`);
}

fetchProducts();