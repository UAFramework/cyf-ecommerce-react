import './ProductAvailability.css'

export default function ProductAvailability( {availabilityDetails} ) {

    return (
        <div className="productAvailability">
          <p>Where to by:</p>
          {
            availabilityDetails?.map(availability => (
              <p key={availability.supplier_id}>{`${availability.unit_price} at ${availability.supplier_name}`}</p>
            ))
          }
        </div>
    )
}
