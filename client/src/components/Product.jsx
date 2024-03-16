import { useEffect, useState } from "react";
import './Product.css'
// import productsAvailability from  '../data/ProductsAvailability'
import ProductAvailability from './ProductAvailability'

export default function Product( {productDetails} ) {

  const [products, setProducts] = useState([]);
  // const [minPrice, setMinPrice] = useState(" ");
  // const [supplier, setSupplier] = useState(" ");
  

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `http://localhost:4000/availability`
        )
      ).json();

      setProducts(data);
    };

    dataFetch();
  }, []);

      
  const productAvailabilityDetails = data.filter(availability => (
    availability.product_id === product.id
  ))


  return (
    <div className="productDetail">
    <p className='productName'>{productDetails.product_name}</p>
    <ProductAvailability availabilityDetails={productAvailabilityDetails} />
  </div>
    )
}

