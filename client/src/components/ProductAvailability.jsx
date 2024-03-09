import "./ProductAvailability.css"
// import { useEffect, useState } from "react"

export default function ProductAvailability( {availabilityDetails} ) {
 
return (
    <div className="productAvailability">
    <p className="productAvailabilityList">Where to by:</p>
    <p >Available from just </p>

     <button className="productAvailabilityButton">see all buying options</button> 
  

    {
      availabilityDetails?.map(availability => (
          <p key={availability.supplier_id}>{`${availability.unit_price} at ${availability.supplier_name}`}</p>
        ))
    }
      
    </div>
)
}

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

    // const  [details, setDetails] = useState([])

    // useEffect(() => {
    //   setDetails(availabilityDetails)
    // }, [availabilityDetails])

    // return (
    //     <div className="productAvailability">
    //       <p>Where to by:</p>
    //       {
    //         details?.map(availability => (
    //           <p key={availability.supplier_id}>`${availability.unit_price} at ${availability.supplier_name}`</p>
    //         ))
    //       }
    //     </div>
    //   )
  // }


