import './Product.css'
import productsAvailability from  '../data/ProductsAvailability'
import ProductAvailability from './ProductAvailability'

export default function Product( {productDetails} ) {
    
  const productAvailabilityDetails = productsAvailability.filter(availability => (
      availability.product_id === productDetails.product_id
  ))

  return (
      <div className="ProductDetail">
          <div >{productDetails.product_name}</div>
          <ProductAvailability availabilityDetails={productAvailabilityDetails} />
      </div>
    )
}

