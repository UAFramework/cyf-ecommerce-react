import { useEffect, useState } from "react"

export default function ProductAvailability( {availabilityDetails} ) {

    /**
     * availabilityDetails should be:
     * [
     *  {
          "product_id" : 6,
          "product_name" : "Ball",
          "unit_price" : 14,
          "supplier_id" : 1,
          "supplier_name" : "Amazon"
        }, 
        {
          ....
        }
     * ]
     */

    const  [details, setDetails] = useState([])

    useEffect(() => {
      setDetails(availabilityDetails)
    }, [availabilityDetails])

    return (
        <div className="productAvailability">
          <p>Where to by:</p>
          {
            details?.map(availability => (
              <p key={availability.supplier_id}>`${availability.unit_price} at ${availability.supplier_name}`</p>
            ))
          }
        </div>
      )
  }


/**
 * arr = [{char: "A"}, {char: "B"}, {char: "C"}] 
 * // i want to get this from the array bove:
 * // ["A", "B", "C"]
 * 
 * arr.map(el => el.char)
 * // returns
 * // ["A", "B", "C"]
 * 
 * 
 */
  
