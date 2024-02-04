import React from 'react';
import productsAvailability from '../data/ProductsAvailability.jsx';

const ProductAvailability = ({ productId }) => {
  const availabilityData = productsAvailability.filter(
    (product) => product.product_id === productId
  );

  return (
    <ul>
        {availabilityData.map((product, index) => (
          <li key={`${product.product_name}-${product.supplier_id}-${product.unit_price}`}>
            {product.unit_price}$ at {product.supplier_name}
          </li>
        ))}
    </ul>
  );
};

export default ProductAvailability;
