import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ProductAvailability = ({ productId }) => {
  const [productsAvailability, setProductsAvailability] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/products-availability');
        setProductsAvailability(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

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
