const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// Пример продуктов
const products = require('./data/products.json');

// API для получения списка продуктов
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});