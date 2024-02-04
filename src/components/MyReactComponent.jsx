// MyReactComponent.jsx
import React from 'react';
import './MyReactComponent.css';
import products from '../data/Products.jsx';
import Product from './Product.jsx';
import ProductAvailability from './ProductAvailability.jsx';

export default function MyReactComponent() {
  return (
    <>
      <div id="products">
        <h2>Products:</h2>
        {products.map(product => (
          <div key={product.id}>
            <Product productName={product.product_name} />
            <ProductAvailability productId={product.id}/>
          </div>
        ))}
      </div>
    </>
  );
}
