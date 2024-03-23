import pg from "pg";
import config from "./config.js";

const poolConfig = {
  connectionString: config.dbUrl,
  connectionTimeoutMillis: 5000,
  ssl: config.dbUrl.includes("localhost")
    ? false
    : { rejectUnauthorized: false },
};

const pool = new pg.Pool(poolConfig);

/**
 * A function for establishing a connection to a database.
 */

export const connectDb = async () => {
  let client;
  try {
    client = await pool.connect();
  } catch (err) {
    console.error("%O", err);
    process.exit(1);
  }
  console.info("Postgres connected to %s", client.database);
  client.release();
};

/**
 * A function to disconnect from the database.
 */
export const disconnectDb = () => pool.end();

/**
 * A class that provides the ability to execute SQL queries to the database.
 */

export default {
  query: (...args) => {
    console.debug("Postgres querying", args);
    return pool.query.apply(pool, args);
  },
};
