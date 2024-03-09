import './Product.css'
import productsAvailability from  '../data/ProductsAvailability'
import ProductAvailability from './ProductAvailability'

export default function Product( {productDetails} ) {
    
  const productAvailabilityDetails = productsAvailability.filter(availability => (
      availability.product_id === productDetails.id
  ))

  return (
      <div className="productDetail">
        <p className='productName'>{productDetails.product_name}</p>
        <ProductAvailability availabilityDetails={productAvailabilityDetails} />
      </div>
    )
}

