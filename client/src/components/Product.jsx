import './Product.css'

export default function Product({ productName, minUnitPrice, suppCount }) {
  return (
    <div className='product'>
      <p>{productName}</p>
      {
        // Ternary Operator
        // const x = (condition) ? "value if true" : "value if false";
        suppCount > 0 ? (
          <p className='available-from'>Available from just £{minUnitPrice}</p>
        ) : (
          <p className='available-from'>not available</p>
        )
      }
    </div>
  )
}
