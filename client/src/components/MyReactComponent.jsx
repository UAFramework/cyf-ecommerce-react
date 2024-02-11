import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyReactComponent.css';
import Product from './Product.jsx';
import ProductAvailability from './ProductAvailability.jsx';

export default function MyReactComponent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

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
