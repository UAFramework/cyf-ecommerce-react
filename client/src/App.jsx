import { useState, useEffect } from 'react'
import Product from './components/Product'
import ProductAvailability from './components/ProductAvailability.jsx'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json()
          setProducts(data)
        } else {
          throw new Error(`server returned status: ${response.statusText}`)
        }
      } catch (error) {
        console.error(error)
        return []
      }
    }

    fetchData('http://localhost:4000/availability')
  }, [])

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map(({ product_id, product_name, min_unit_price, supplier_count }) => (
          <li key={product_id}>
            <div className='productContainer'>
              <Product productName={product_name} minUnitPrice={min_unit_price} suppCount={supplier_count} />
              <ProductAvailability productId={product_id} suppCount={supplier_count} />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
