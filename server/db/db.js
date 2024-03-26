import pg from "pg";
import config from "./config.js";

const poolConfig = {
	connectionString: config.dbUrl,
	connectionTimeoutMillis: 5000,
	ssl: config.dbUrl.includes("localhost") ? false : { rejectUnauthorized: false }
};

const pool = new pg.Pool(poolConfig);

const connectDb = async () => {
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

const disconnectDb = () => pool.end();

/**
 * usage:
 * 	`import db from "path/to/db";` 
 * then use it with
 * 	`await db.query("<SQL>", [...<variables>])`.
 */
export default {
	query: (...args) => {
		console.debug("Postgres querying %O", args);
		return pool.query.apply(pool, args);
	},
};

export { connectDb, disconnectDb };