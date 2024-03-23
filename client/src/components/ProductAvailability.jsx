import { useEffect, useState } from "react";
import "./ProductAvailability.css";

export default function ProductAvailability({ productId, suppCount }) {
  const [availabilityDetails, setAvailabilityDetails] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setAvailabilityDetails(data);
        } else {
          throw new Error(`Server returned status: ${response.statusText}`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (suppCount > 0) {
      fetchData(`http://localhost:4000/availability/product_id/${productId}`);
    }
  }, [productId, suppCount]);

  return (
    <div className="productAvailability">
      {availabilityDetails.map((availability) => (
        <p
          key={availability.supplier_id}
        >{`${availability.unit_price} at ${availability.supplier_name}`}</p>
      ))}
    </div>
  );
}
