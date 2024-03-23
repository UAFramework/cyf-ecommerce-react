import cors from "cors";
import express from "express";
import db from "./db/db.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const result = await db.query("select version()");
    res.status(200).send(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(504).json({ error });
  }

  /**
   * Old way (outdated)
   * query("select version()")
   *  .then(result => {
   *    ....
   *  })
   */
});

app.get("/products", async (req, res) => {
  try {
    const result = await db.query("select * from taska.public.products");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// todo: implement 2 end-poins below:
// GET /availability
// GET /availability/product-id/:productId

app.get("/availability", async (req, res) => {
  const query = `
  select
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
    const result = await db.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /availability/product-id/:productId
app.get("/availability/product-id/:productId", async (req, res) => {
  const productId = req.params.productId;
  // todo:
  // do sanity check for productId
  // example: productId should be a number
  // if (!Number(productId))  {
  //     res.status(500).send({error: "FUCK YOU!"});
  // }
  const query = `
  select
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
  ORDER BY pa.prod_id`;

  // http://localhost:4000/availability/product-id/`insert into users (email, passwors) values ('criminal@example.com', '123')`

  try {
    const result = await db.query(query, [productId]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(4000, async () => {
  console.log("Server is listening on port 4000. Ready to accept requests!");
});
