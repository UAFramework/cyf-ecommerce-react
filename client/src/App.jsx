import products from './data/Products.jsx'
import Product from "./components/Product.jsx"
import './App.css'

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