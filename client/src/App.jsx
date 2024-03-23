import React, { useState, useEffect } from "react";
import Product from "./components/Product.jsx";
import "./App.css";
import ProductAvailability from "./components/ProductAvailability.jsx";

function App() {
  const [availability, setAvailability] = useState([]);

  /**
   * 
    const getRandomArrayOfTwoNumbersAsObject = () => {
      return {
        numberOne: Math.random(),
        numberTwo: Math.random()
      };
    }

    const getRandomArrayOfTwoNumbersAsArray = () => {
      return [Math.random(), Math.random()];
    }

    const twoNumbersTogetherAsObject = getRandomArrayOfTwoNumbers();
    // twoNumbersTogether = ... ? 

    const twoNumberTogetherAsArray = getRandomArrayOfTwoNumbersAsObject()'
    // twoNumberTogetherAsArray = ...?
   */

  useEffect(() => {
    fetch("http://localhost:4000/availability")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setAvailability(data);
      })
      .catch((error) => {
        console.error("Error fetching availability:", error);
      });
  }, []);

  return (
    <>
      <h2>Products</h2>
      <ul>
        {availability.map(
          ({ product_id, product_name, min_unit_price, supplier_count }) => (
            <li key={product_id}>
              <Product
                productName={product_name}
                minUnitPrice={min_unit_price}
                suppCount={supplier_count}
              />
              <ProductAvailability
                productId={product_id}
                suppCount={supplier_count}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default App;
