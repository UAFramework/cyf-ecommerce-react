import cors from "cors";
import db from "./db/db.js";
import express from "express";

const app = express();
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    
  db.query("select version()")
  .then((result) => {
    res.status(200).send(result.rows[0]);
  })
  .catch((error) => {
    console.error(error);
  });
});

app.get("/customers", async (req, res) => {
    try {
        const result = await db.query("select * from customers order by name asc");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});

app.get("/suppliers", async (req, res) => {
    try {
        const result = await db.query("select * from suppliers order by name asc");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({error});
    }
});

// -----------------------------------------------
// Product and Availability:
// -----------------------------------------------

// {
//     "availability": object [
//       {
//         "product_id": numeric,
//         "product_name": string,
//         "min_unit_price": numeric,
//         "supp_count": numeric
//       }
//     ]
//   }

app.get('/availability', async (req, res) => {
  const queryString = `select 
      p.id as product_id,	
      p.product_name,
      min(pa.unit_price) as min_unit_price,
      count(distinct s.id) as supplier_count
  from products p
  left join product_availability pa 
      on pa.prod_id = p.id
  left join suppliers s 
      on s.id = pa.supp_id 
  group by p.id, p.product_name`;
    
  try {
    const result = await db.query(queryString);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

app.get('/availability/product-id/:productId', async(req, res) => {
  let productId = req.params['productId'];
  const availabilityByProductId = `select
	pa.prod_id as productId,
	pa.supp_id as supplier_id,
	s.supplier_name,
	pa.unit_price
from
	product_availability pa
inner join suppliers s 
      on
	pa.supp_id = s.id
  WHERE pa.prod_id = $1
ORDER BY 
      productId`;

//   const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
// const values = ['brianc', 'brian.m.carlson@gmail.com']
 
// const res = await client.query(text, values)
// console.log(res.rows[0])
try {
  const result = await db.query(availabilityByProductId, [productId])
  if (result.rows) {
    res.status(200).json(result.rows)
  } else {
    res.status(404).json({
      error: `couldn't find availability for productId ${productId}`,
    })
  }
} catch (error) {
  console.error(error)
  res.status(500).json({error})
}
});


    app.listen(process.env.PORT || 4000, function () {
      console.log(`Server is listening on port ${process.env.PORT || 4000}. Ready to accept requests!`);
});
