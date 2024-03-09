import products from './data/Products.jsx'
import Product from "./components/Product.jsx"
import './App.css'
import { useState, useEffect } from 'react'

const [product, setProduct] = useState(0);

//   useEffect(() => {
//     fetch(' ')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setProduct(data);
//       });
//   }, []);
//   return (
//     <div>
      
      
//     </div>
//   );
// };
// export default Fetch;


function App() {
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