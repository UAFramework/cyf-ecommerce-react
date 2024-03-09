import cors from "cors"
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

app.get("/availability", async (req, res) => {
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
    res.status(500).json({error});
  }
});

//   {
//     "productId": numeric,
//     "availability": object [
//       {
//         "supplier_id": numeric,
//         "supplier_name": string,
//         "unit_price": numeric
//       }
//     ]
//   }

app.get("/availability/product-id/:productId", (req, res) => {
    
  db.query("select version()")
  .then((result) => {
    res.status(200).send(result.rows[0]);
  })
  .catch((error) => {
    console.error(error);
  });
});

app.listen(process.env.PORT || 4000, function () {
  console.log(`Server is listening on port ${process.env.PORT || 4000}. Ready to accept requests!`);
});
