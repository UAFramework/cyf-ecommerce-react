import './MyReactComponent.css'


export default function MyReactComponent({ products, products_availability }) {

  return (
    <table className='ProductsTable'>
      <tbody>
        <tr>
          <th>
            <h3>Product</h3>
          </th>
          <th>
            <h3>Price in store</h3>
          </th>
        </tr>
        {products.map(product => {
          return (
            <tr key={product.id}>
              <td>{product.product_name}</td>
              <td>
                {
                  /* {products_availability.unit_price} */
                  // products_availability[0].unit_price

                  products_availability.filter(product_availability => product_availability.product_id === product.id)
                    .map(product_availability => {

                      return (
                        <p key={product_availability.supplier_id}>${product_availability.unit_price} at {product_availability.supplier_name}</p>
                      )
                      // product_availability.unit_price, product_availability.supplier_name
                      // unit_price, supplier_name
                    })
                }

              </td>

            </tr>
          )
        })}
      </tbody>
    </table>)
}
