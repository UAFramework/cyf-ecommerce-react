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
    const result = await query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// todo: implement 2 end-poins below:
// GET /availability
// GET /availability/product-id/:productId
// see Task.Level-2.md

app.listen(4000, async () => {
  console.log("Server is listening on port 4000. Ready to accept requests!");
});
