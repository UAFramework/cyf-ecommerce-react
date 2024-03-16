import { useEffect, useState } from 'react'
import './ProductAvailability.css'

export default function ProductAvailability({ productId, suppCount }) {
  const [availabilityDetails, setAvailabilityDetails] = useState([])
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json()
          setAvailabilityDetails(data)
        } else {
          throw new Error(`server returned status: ${response.statusText}`)
        }
      } catch (error) {
        console.error(error)
        return []
      }
    }

    if (suppCount > 0) {
      fetchData(`http://localhost:4000/availability/product-id/${productId}`)
    }
  }, [showDetails])

  return (
    <div className='productAvailability'>
      {showDetails
        ? availabilityDetails.map((availability) => (
            <p key={availability.supplier_id}>{`${availability.unit_price} at ${availability.supplier_name}`}</p>
          ))
        : suppCount > 0 && (
            <a
              href='#'
              onClick={() => {
                setShowDetails(!showDetails)
              }}
            >
              Show details
            </a>
          )}
    </div>
  )
}
