import './Product.css'

export default function Product( {productName, minUnitPrice, suppCount} ) {

  return (
    <div className="productDetail">
      <p className='productName'>{productName}</p>
      {
        suppCount > 0 
        ? <p className='available-from'>Available from just £{minUnitPrice}</p>
        : <p className='available-from'>not available</p>
      }
    
    </div>
  )
}

