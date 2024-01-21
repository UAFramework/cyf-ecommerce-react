import './MyReactComponent.css'
import products from '../data/Products.jsx'

export default function MyReactComponent() {

  const words = ["one", "Two", "Three", "Four", "Five"];

  return (
    <>
      <div id="words">{words.join(", ")}</div>
      <div id="products">
        <h2>Products:</h2>
        <ul>
          {
            products.map(product =>
              <li key={product.id}>{product.product_name}</li>
            )
          }
        </ul>
      </div>
    </>
  )

}