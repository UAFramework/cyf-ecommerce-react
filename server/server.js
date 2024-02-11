const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const products = require('./data/products.json');
const productsAvailability = require('./data/products-availability.json');

// API Endpoints
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products-availability', (req, res) => {
  res.json(productsAvailability);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
