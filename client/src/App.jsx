import products from './data/Products.jsx'
import Product from "./components/Product.jsx"
import './App.css'
// import { useState, useEffect } from 'react'
import React, { useState, useEffect } from 'react';

// const [product, setProduct] = useState(0);

function App() {
  // const [availability, setAvailability] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:4000/availability/product-id/:productId" )
  //     .then((res) => res.json())
  //     .then((data) => setAvailability(data.availability));
  // }, []);

  return (
    <>
     <h2>Products</h2>
     <ul>
      {
        products.map(product =>
          <li key={product.id}><Product productDetails={product} /></li>
        )
      }
      </ul>
      
    </>
  )
}

export default App