import { drizzle } from "drizzle-orm/node-postgres";
import { config } from "dotenv";
import { Pool } from "pg";

config({ path: __dirname + "/.env.local" });


const pool = new Pool({
  connectionString: process.env.RAILWAY_DB_URL!,
});

export const db = drizzle(pool);