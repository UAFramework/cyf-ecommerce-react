import { useEffect, useState } from "react";
import "./ProductAvailability.css"


export default function ProductAvailability(  ) {
  const [availabilityDetails, setAvailabilityDetails] = useState()
 

  const fetchAvailabilityData = async (availabilityDetails) => {
    try {
      const response = await fetch(`http://localhost:4000/availability/product-id/${productid}`)
      if (response.ok) {
        const data = await response.json()
        setAvailabilityDetails(data[0])
      } else {
        throw new Error(`Got a bad response from the server: ${response.statusText}`)
      }
    } catch (error) {
      alert("An error occurred while fetching data.\n" + 
            "See console log for more details.")

      console.error(error)
    } 
  }

  useEffect(() => {
    if (availabilityDetails === undefined || availabilityDetails === "") {
      setAvailabilityDetails(undefined)
    } else {
      fetchAvailabilityData (availabilityDetails)
    }
  }, [availabilityDetails])


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


